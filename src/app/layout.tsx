import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../styles/pseudo.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emburc.com"),
  title: "Emburc Technologies — Technology + Talent Partner",
  description:
    "eMburc Technologies is a Technology + Talent Partner: digital product development, AI & automation, modernization & migration, and vetted engineering talent.",
  icons: { icon: { url: "/assets/favicon.svg", type: "image/svg+xml" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
