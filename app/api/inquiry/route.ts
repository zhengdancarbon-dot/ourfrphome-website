import { NextResponse } from "next/server";
import { validateInquiryPayload } from "@/lib/inquiry-validation";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type ResendAttachment = {
  filename: string;
  content: string;
};

type EmailPayload = {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
  attachments: ResendAttachment[];
};

const resendRetryDelays = [0, 1000, 2500];

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRateLimitResponse(status: number, providerError: string) {
  const normalizedError = providerError.toLowerCase();
  return (
    status === 429 ||
    normalizedError.includes("rate_limit") ||
    normalizedError.includes("rate limit") ||
    normalizedError.includes("too many requests")
  );
}

async function sendResendEmail(apiKey: string, payload: EmailPayload) {
  let lastResponse = {
    ok: false,
    status: 0,
    providerError: "",
  };

  for (let attemptIndex = 0; attemptIndex < resendRetryDelays.length; attemptIndex += 1) {
    const delay = resendRetryDelays[attemptIndex];
    const attempt = attemptIndex + 1;

    if (delay > 0) {
      await wait(delay);
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (emailResponse.ok) {
      return { ok: true as const };
    }

    const providerError = await emailResponse.text();
    lastResponse = {
      ok: false,
      status: emailResponse.status,
      providerError,
    };

    const canRetry =
      attemptIndex < resendRetryDelays.length - 1 &&
      isRateLimitResponse(emailResponse.status, providerError);

    if (!canRetry) {
      break;
    }

    console.warn("Resend inquiry delivery rate-limited; retrying", {
      attempt,
      nextAttempt: attempt + 1,
      retryDelayMs: resendRetryDelays[attemptIndex + 1],
      status: emailResponse.status,
    });
  }

  return lastResponse;
}

function formatInquiry(values: ReturnType<typeof validateInquiryPayload>["values"]) {
  return [
    "New website inquiry",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `WhatsApp: ${values.whatsapp || "Not provided"}`,
    `Product Type: ${values.product}`,
    `Buyer Country: ${values.country || "Not provided"}`,
    `Quantity: ${values.quantity || "Not provided"}`,
    `Destination Country: ${values.destinationCountry || "Not provided"}`,
    `Required Documents: ${values.requiredDocuments || "Not provided"}`,
    `Required Specification: ${values.requiredSpecification || "Not provided"}`,
    `Application / End Use: ${values.application || "Not provided"}`,
    `Locale: ${values.locale}`,
    `Source Page: ${values.sourcePage || "Not provided"}`,
    ...(values.additionalDetails.length
      ? [
          "",
          "Product-specific RFQ details:",
          ...values.additionalDetails.map((detail) => `${detail.label}: ${detail.value}`),
        ]
      : []),
    `Attachment: ${values.attachmentName || "None"}`,
    "",
    "Message:",
    values.message,
    "",
    `Submitted from: ${
      values.sourcePage
        ? values.sourcePage.startsWith("/")
          ? `${siteConfig.url}${values.sourcePage}`
          : values.sourcePage
        : values.locale === "en"
          ? `${siteConfig.url}/contact`
          : `${siteConfig.url}/${values.locale}/contact`
    }`,
    `Received at: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let body: Record<string, unknown>;
    let attachment: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const attachmentValue = formData.get("attachment");
      attachment =
        attachmentValue instanceof File && attachmentValue.size > 0
          ? attachmentValue
          : null;
      body = Object.fromEntries(formData.entries());
    } else {
      body = (await request.json()) as Record<string, unknown>;
    }

    const validation = validateInquiryPayload(body);

    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, errors: validation.errors },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL || siteConfig.email;
    const fromEmail =
      process.env.INQUIRY_FROM_EMAIL ||
      "FRP HOME Website <website@myfrphome.com>";

    if (!resendApiKey) {
      console.error("Inquiry email delivery is not configured: RESEND_API_KEY is missing.");
      return NextResponse.json(
        { ok: false, error: "Email service is temporarily unavailable." },
        { status: 503 },
      );
    }

    const attachments: ResendAttachment[] = [];
    if (attachment) {
      attachments.push({
        filename: attachment.name.replace(/[^\w.\- ()]/g, "_"),
        content: Buffer.from(await attachment.arrayBuffer()).toString("base64"),
      });
    }

    const emailResponse = await sendResendEmail(resendApiKey, {
      from: fromEmail,
      to: [toEmail],
      reply_to: validation.values.email,
      subject: `[Website Inquiry] ${validation.values.product} - ${validation.values.company}`,
      text: formatInquiry(validation.values),
      attachments,
    });

    if (!emailResponse.ok) {
      console.error("Resend inquiry delivery failed", {
        status: emailResponse.status,
        providerError: emailResponse.providerError,
      });
      return NextResponse.json(
        { ok: false, error: "The inquiry could not be delivered. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry request failed", error);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
