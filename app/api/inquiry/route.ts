import { NextResponse } from "next/server";
import { validateInquiryPayload } from "@/lib/inquiry-validation";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type ResendAttachment = {
  filename: string;
  content: string;
};

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
    `Submitted from: ${siteConfig.url}/contact`,
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
      "FRP HOME Website <website@tzcarbon.com>";

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

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: validation.values.email,
        subject: `[Website Inquiry] ${validation.values.product} - ${validation.values.company}`,
        text: formatInquiry(validation.values),
        attachments,
      }),
    });

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();
      console.error("Resend inquiry delivery failed", {
        status: emailResponse.status,
        providerError,
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
