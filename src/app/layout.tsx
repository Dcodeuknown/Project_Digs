import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: "Daniel Digol | Software, Systems & Automation",
  description:
    "Daniel Digol builds useful software, connects business systems, and automates workflows.",
  openGraph: {
    title: "Daniel Digol | Software, Systems & Automation",
    description:
      "A practical builder working across software, business systems, and automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
