import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paid Creative — Men's Apparel Creative That Scales",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
