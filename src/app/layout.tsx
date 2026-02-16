import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paid Creative — Men's Apparel Strategy That Scales Your Brand",
  description:
    "Improve Meta ROAS in 2 weeks through better creative and a merchandising focused account structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
