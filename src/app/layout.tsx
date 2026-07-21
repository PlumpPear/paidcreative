import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paid Creative — Men's Lifestyle Creative That Scales",
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
          href="https://fonts.googleapis.com/css2?family=Anton&family=Epilogue:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
