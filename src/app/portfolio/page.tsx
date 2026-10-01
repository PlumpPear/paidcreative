import type { Metadata } from "next";
import PortfolioLibrary from "./PortfolioLibrary";
import { brands } from "./data";

export const metadata: Metadata = {
  title: "Portfolio — Paid Creative",
  description:
    "Browse Paid Creative's ads for men's lifestyle brands. Click any video to play it, then dive into the case study.",
};

const TITLE = "Portfolio";
const MARQUEE_WORDS = [...brands.map((b) => b.name), "Creative that scales"];

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-intro">
        <p className="casestudy-label fade-in-up">Our Work</p>
        <h1 className="portfolio-title" aria-label={TITLE}>
          {TITLE.split("").map((ch, i) => (
            <span
              key={i}
              className="portfolio-title-letter"
              style={{ animationDelay: `${i * 60}ms` }}
              aria-hidden="true"
            >
              {ch}
            </span>
          ))}
        </h1>
        <p className="portfolio-intro-text fade-in-up">
          Ads we&apos;ve made for men&apos;s lifestyle brands. Click any video to
          play it, or dive into the case study behind it.
        </p>
      </header>

      <div className="portfolio-marquee" aria-hidden="true">
        <div className="portfolio-marquee-track">
          {[0, 1].map((copy) =>
            MARQUEE_WORDS.map((w, i) => (
              <span
                key={`${copy}-${i}`}
                className={`portfolio-marquee-word ${i % 2 ? "portfolio-marquee-word--outline" : ""}`}
              >
                {w}
                <span className="portfolio-marquee-star">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      <PortfolioLibrary />
    </main>
  );
}
