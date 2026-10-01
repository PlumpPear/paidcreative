import type { Metadata } from "next";
import PortfolioLibrary from "./PortfolioLibrary";

export const metadata: Metadata = {
  title: "Portfolio — Paid Creative",
  description:
    "Browse Paid Creative's ads for men's lifestyle brands. Click any video to play it, then dive into the case study.",
};

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      <h1 className="portfolio-title">Portfolio</h1>
      <PortfolioLibrary />
    </main>
  );
}
