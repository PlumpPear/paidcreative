"use client";

import Link from "next/link";
import { useState } from "react";
import { brands, type PortfolioVideo } from "./data";

function VideoCard({
  video,
  playing,
  onPlay,
}: {
  video: PortfolioVideo;
  playing: boolean;
  onPlay: () => void;
}) {
  const frameClass = `portfolio-frame portfolio-frame--${video.format}`;

  if (!video.youtubeId) {
    return (
      <figure className="portfolio-card">
        <div className={`${frameClass} portfolio-frame--placeholder`} />
        <figcaption className="portfolio-card-title">{video.title}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="portfolio-card">
      <div className={frameClass}>
        {playing ? (
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
            onClick={onPlay}
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
      <figcaption className="portfolio-card-title">{video.title}</figcaption>
    </figure>
  );
}

export default function PortfolioLibrary() {
  const [filter, setFilter] = useState<string>("all");
  // Only one video plays at a time; starting another unmounts the previous iframe.
  const [playingId, setPlayingId] = useState<string | null>(null);

  const visible = filter === "all" ? brands : brands.filter((b) => b.slug === filter);

  return (
    <section className="portfolio-library">
      <div className="portfolio-filters" role="group" aria-label="Filter by brand">
        {[{ slug: "all", name: "All" }, ...brands].map((b) => (
          <button
            key={b.slug}
            type="button"
            className="portfolio-chip"
            aria-pressed={filter === b.slug}
            onClick={() => setFilter(b.slug)}
          >
            {b.name}
          </button>
        ))}
      </div>

      {visible.map((brand) => {
        const vertical = brand.videos.filter((v) => v.format === "vertical");
        const horizontal = brand.videos.filter((v) => v.format === "horizontal");
        const renderCards = (videos: PortfolioVideo[]) =>
          videos.map((v, i) => {
            const id = `${brand.slug}-${v.youtubeId ?? i}`;
            return (
              <VideoCard
                key={id}
                video={v}
                playing={playingId === id}
                onPlay={() => setPlayingId(id)}
              />
            );
          });

        return (
          <div key={brand.slug} className="portfolio-brand">
            <div className="portfolio-brand-header">
              <div>
                <img src={brand.logo} alt={brand.name} className="portfolio-brand-logo" />
                <p className="portfolio-brand-blurb">{brand.blurb}</p>
              </div>
              <Link href={brand.caseStudyHref} className="portfolio-case-link">
                View case study <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            {vertical.length > 0 && (
              <div className="portfolio-grid portfolio-grid--vertical">
                {renderCards(vertical)}
              </div>
            )}
            {horizontal.length > 0 && (
              <div className="portfolio-grid portfolio-grid--horizontal">
                {renderCards(horizontal)}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
