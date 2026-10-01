"use client";

import Link from "next/link";
import { useState } from "react";
import { brands } from "./data";

export default function PortfolioLibrary() {
  const [filter, setFilter] = useState<string>("all");
  // Only one video plays at a time; starting another unmounts the previous iframe.
  const [playingId, setPlayingId] = useState<string | null>(null);

  const visible = filter === "all" ? brands : brands.filter((b) => b.slug === filter);
  const tiles = visible.flatMap((brand) =>
    brand.videos.map((video, i) => ({ brand, video, id: `${brand.slug}-${i}` }))
  );
  const selected = brands.find((b) => b.slug === filter);

  return (
    <section className="portfolio-library">
      <div className="portfolio-tabs" role="group" aria-label="Filter by brand">
        {[{ slug: "all", name: "All" }, ...brands].map((b) => (
          <button
            key={b.slug}
            type="button"
            className="portfolio-tab"
            aria-pressed={filter === b.slug}
            onClick={() => setFilter(b.slug)}
          >
            {b.name}
          </button>
        ))}
      </div>

      <p className="portfolio-intro">
        Ads we&apos;ve made for men&apos;s lifestyle brands. Click any video to
        play it, or dive into the case study behind it.
      </p>
      {selected && (
        <Link href={selected.caseStudyHref} className="portfolio-intro-link">
          View the {selected.name} case study &rarr;
        </Link>
      )}

      <div className="portfolio-grid">
        {tiles.map(({ brand, video, id }) => (
          <figure key={id} className="portfolio-card">
            <div className="portfolio-frame">
              {!video.youtubeId ? null : playingId === id ? (
                <iframe
                  className="portfolio-player"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="portfolio-thumb"
                  onClick={() => setPlayingId(id)}
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="portfolio-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <figcaption className="portfolio-caption">
              <div>
                <span className="portfolio-brand-name">{brand.name}</span>
                <span className="portfolio-video-title">{video.title}</span>
              </div>
              <Link href={brand.caseStudyHref} className="portfolio-case-link">
                Case study &rarr;
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
