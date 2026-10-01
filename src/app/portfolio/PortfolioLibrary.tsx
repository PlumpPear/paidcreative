"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import YouTubeTile from "@/components/YouTubeTile";
import { brands, type PortfolioBrand, type PortfolioVideo } from "./data";

type PlayState = { playingId: string | null; play: (id: string) => void };

function VideoTile({
  id,
  video,
  playState,
  className = "",
}: {
  id: string;
  video: PortfolioVideo;
  playState: PlayState;
  className?: string;
}) {
  const playing = playState.playingId === id;

  return (
    <figure className={`portfolio-card ${className}`}>
      <div
        className={`portfolio-frame portfolio-frame--${video.format}`}
        data-playing={playing || undefined}
      >
        {video.youtubeId && (
          <YouTubeTile
            youtubeId={video.youtubeId}
            title={video.title}
            playing={playing}
            onPlay={() => playState.play(id)}
          />
        )}
      </div>
      <figcaption className="portfolio-card-title">{video.title}</figcaption>
    </figure>
  );
}

const AUTOSCROLL_PX_PER_SEC = 40;

// 9:16 rail. When the videos don't all fit, the list is rendered twice and
// drifts left in a seamless loop. It pauses while hovered, touched, off
// screen, after an arrow click, or while one of its videos is playing.
function VerticalRail({
  brand,
  videos,
  playState,
}: {
  brand: PortfolioBrand;
  videos: PortfolioVideo[];
  playState: PlayState;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [loop, setLoop] = useState(false);
  const pausedUntil = useRef(0);
  const hovered = useRef(false);
  const inView = useRef(false);
  const railPlaying = playState.playingId?.startsWith(`${brand.slug}-v`) ?? false;
  const railPlayingRef = useRef(railPlaying);
  railPlayingRef.current = railPlaying;

  // Loop only when one set of videos is wider than the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const check = () => {
      const item = rail.firstElementChild as HTMLElement | null;
      if (!item) return;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      setLoop(videos.length * (item.offsetWidth + gap) > rail.clientWidth + 2);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [videos.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !loop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(([e]) => (inView.current = e.isIntersecting));
    io.observe(rail);

    const setWidth = () => rail.scrollWidth / 2;
    let pos = rail.scrollLeft;
    let last = performance.now();
    let frame = requestAnimationFrame(function step(now) {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      // Pick up any manual scrolling (swipe, trackpad, arrows).
      if (Math.abs(rail.scrollLeft - pos) > 2) pos = rail.scrollLeft;
      const paused =
        hovered.current || railPlayingRef.current || !inView.current || now < pausedUntil.current;
      if (!paused) {
        pos += AUTOSCROLL_PX_PER_SEC * dt;
        if (pos >= setWidth()) pos -= setWidth();
        rail.scrollLeft = pos;
      }
      frame = requestAnimationFrame(step);
    });

    // Keep manual scrolling inside the looped range.
    const wrap = () => {
      if (rail.scrollLeft >= setWidth()) rail.scrollLeft -= setWidth();
    };
    rail.addEventListener("scroll", wrap, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      rail.removeEventListener("scroll", wrap);
    };
  }, [loop]);

  // Slide a video that starts playing fully into view (it may be half off the edge).
  useEffect(() => {
    if (!railPlaying) return;
    railRef.current
      ?.querySelector("[data-playing]")
      ?.closest(".portfolio-rail-item")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [railPlaying, playState.playingId]);

  const pause = (ms: number) => (pausedUntil.current = performance.now() + ms);

  const scrollBy = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    pause(2500);
    if (loop && dir < 0 && rail.scrollLeft < rail.clientWidth) {
      rail.scrollLeft += rail.scrollWidth / 2;
    }
    rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  const sets = loop ? [0, 1] : [0];

  return (
    <div className="portfolio-rail-wrap">
      <div
        className="portfolio-rail"
        ref={railRef}
        onPointerEnter={(e) => e.pointerType === "mouse" && (hovered.current = true)}
        onPointerLeave={() => (hovered.current = false)}
        onTouchStart={() => pause(60_000)}
        onTouchEnd={() => pause(3000)}
      >
        {sets.flatMap((set) =>
          videos.map((v, i) => (
            <VideoTile
              key={`${set}-${i}`}
              id={`${brand.slug}-v${set}-${i}`}
              video={v}
              playState={playState}
              className="portfolio-rail-item"
            />
          ))
        )}
      </div>
      {loop && (
        <div className="portfolio-rail-arrows">
          <button type="button" aria-label="Previous videos" onClick={() => scrollBy(-1)}>
            &larr;
          </button>
          <button type="button" aria-label="Next videos" onClick={() => scrollBy(1)}>
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
}

function BrandPanel({ brand, playState }: { brand: PortfolioBrand; playState: PlayState }) {
  const horizontal = brand.videos.filter((v) => v.format === "horizontal");
  const vertical = brand.videos.filter((v) => v.format === "vertical");

  return (
    <div className="portfolio-panel fade-in-up" id={`panel-${brand.slug}`} role="tabpanel">
      <div className="portfolio-brand-header">
        <div>
          <img src={brand.logo} alt={brand.name} className="portfolio-brand-logo" />
          <p className="portfolio-brand-stat">{brand.stat}</p>
        </div>
        <a href={brand.caseStudyHref} className="cta-button portfolio-case-cta">
          View Case Study
        </a>
      </div>

      {horizontal.length > 0 && (
        <div className="portfolio-grid-16x9">
          {horizontal.map((v, i) => (
            <VideoTile key={i} id={`${brand.slug}-h${i}`} video={v} playState={playState} />
          ))}
        </div>
      )}

      {vertical.length > 0 && (
        <VerticalRail brand={brand} videos={vertical} playState={playState} />
      )}
    </div>
  );
}

// Graza-style list of brands on the side; the pigeon logo hops to the
// selected one.
function BrandToggle({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (slug: string) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [pigeonY, setPigeonY] = useState<number | null>(null);
  const [hops, setHops] = useState(0);

  useLayoutEffect(() => {
    const place = () => {
      const btn = listRef.current?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
      if (btn) setPigeonY(btn.offsetTop + btn.offsetHeight / 2);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <div className="portfolio-toggle" ref={listRef} role="tablist" aria-orientation="vertical">
      {pigeonY !== null && (
        <span className="portfolio-pigeon" style={{ top: pigeonY }} aria-hidden="true">
          <img
            key={hops}
            src="/paid-creative-pigeon-logo.png"
            alt=""
            className={hops ? "portfolio-pigeon-hop" : undefined}
          />
        </span>
      )}
      {brands.map((b) => (
        <button
          key={b.slug}
          type="button"
          role="tab"
          data-slug={b.slug}
          aria-selected={active === b.slug}
          aria-controls={`panel-${b.slug}`}
          className="portfolio-toggle-item"
          onClick={() => {
            if (b.slug === active) return;
            setHops((h) => h + 1);
            onSelect(b.slug);
          }}
        >
          <span className="portfolio-toggle-dot" aria-hidden="true" />
          {b.name}
        </button>
      ))}
    </div>
  );
}

export default function PortfolioLibrary() {
  const [active, setActive] = useState(brands[0].slug);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Clicking anywhere outside the playing video stops it and restores the
  // play button. Clicks inside the YouTube iframe never reach the document.
  useEffect(() => {
    if (!playingId) return;
    const stop = (e: PointerEvent) => {
      if (!(e.target as Element).closest("[data-playing]")) setPlayingId(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlayingId(null);
    document.addEventListener("pointerdown", stop);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", stop);
      document.removeEventListener("keydown", onKey);
    };
  }, [playingId]);

  const brand = brands.find((b) => b.slug === active) ?? brands[0];
  const playState: PlayState = { playingId, play: setPlayingId };

  return (
    <section className="portfolio-library">
      <div className="portfolio-library-inner">
        <BrandToggle
          active={active}
          onSelect={(slug) => {
            setPlayingId(null);
            setActive(slug);
          }}
        />
        <BrandPanel key={brand.slug} brand={brand} playState={playState} />
      </div>
    </section>
  );
}
