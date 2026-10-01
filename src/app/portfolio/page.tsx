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
      <header className="portfolio-intro fade-in-up">
        <p className="casestudy-label">Our Work</p>
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-intro-text">
          Ads we&apos;ve made for men&apos;s lifestyle brands. Click any video to
          play it, or dive into the case study behind it.
        </p>
      </header>
      <PortfolioLibrary />
    </main>
  );
}
