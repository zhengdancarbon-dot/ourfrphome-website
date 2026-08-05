import { SiteLayoutContent } from "@/components/site-layout-content";
import { siteMetadata } from "@/lib/site-metadata";
import "../globals.css";

export const metadata = siteMetadata;

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <SiteLayoutContent>{children}</SiteLayoutContent>
    </html>
  );
}
