import type { Metadata } from "next";
import PortfolioLibrary from "./PortfolioLibrary";

export const metadata: Metadata = {
  title: "Portfolio — Paid Creative",
  description:
    "Browse Paid Creative's ads for men's lifestyle brands. Tap any video to play it, then dive into the case study.",
};

export default function Portfolio() {
  return (
    <main>
      <section className="portfolio-hero">
        <div className="portfolio-hero-content fade-in-up">
          <p className="casestudy-label">Our Work</p>
          <h1>Portfolio</h1>
          <p className="portfolio-hero-sub">
            Ads we&apos;ve made for men&apos;s lifestyle brands. Tap any video to
            play it, then dive into the case study behind it.
          </p>
        </div>
      </section>
      <PortfolioLibrary />
    </main>
  );
}
