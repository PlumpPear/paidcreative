"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import YouTubeTile from "@/components/YouTubeTile";
import { ShortsScene } from "@/components/pigeon/ScrollScenes";
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

function BrandSection({ brand, playState }: { brand: PortfolioBrand; playState: PlayState }) {
  const horizontal = brand.videos.filter((v) => v.format === "horizontal");
  const vertical = brand.videos.filter((v) => v.format === "vertical");

  return (
    <section id={brand.slug} className="portfolio-brand">
      {brand.slug === "birddogs" && <ShortsScene />}
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
    </section>
  );
}

// Graza-style brand list pinned to the side (a sticky row on mobile). The
// pigeon logo flies to the dot of the brand section currently in view.
function BrandNav({ active }: { active: string }) {
  const navRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    const place = () => {
      const nav = navRef.current;
      const dot = nav?.querySelector<HTMLElement>(`[data-slug="${active}"] .portfolio-nav-dot`);
      if (!nav || !dot) return;
      const n = nav.getBoundingClientRect();
      const d = dot.getBoundingClientRect();
      setPos({
        x: d.left - n.left + nav.scrollLeft + d.width / 2,
        y: d.top - n.top + d.height / 2,
      });
    };
    place();
    // Mobile: the nav is a sideways-scrolling row; keep the active brand visible.
    const nav = navRef.current;
    const item = nav?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (nav && item && nav.scrollWidth > nav.clientWidth) {
      nav.scrollTo({ left: item.offsetLeft - nav.clientWidth / 2 + item.offsetWidth / 2, behavior: "smooth" });
    }
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <nav className="portfolio-nav" ref={navRef} aria-label="Brands">
      {pos && (
        <span
          className="portfolio-pigeon"
          style={{ left: pos.x, top: pos.y }}
          aria-hidden="true"
        >
          {/* Keyed on the brand so the flight animation replays on each move */}
          <img
            key={active}
            src="/paid-creative-pigeon-logo.png"
            alt=""
            className="portfolio-pigeon-fly"
          />
        </span>
      )}
      {brands.map((b) => (
        <a
          key={b.slug}
          href={`#${b.slug}`}
          data-slug={b.slug}
          aria-current={active === b.slug ? "true" : undefined}
          className="portfolio-nav-item"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(b.slug)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="portfolio-nav-dot" aria-hidden="true" />
          {b.name}
        </a>
      ))}
    </nav>
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

  // Track which brand section is under the middle of the screen; at the very
  // bottom of the page, fall back to the last section that's on screen.
  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight / 2;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const rects = brands.map((b) => ({
        slug: b.slug,
        rect: document.getElementById(b.slug)?.getBoundingClientRect(),
      }));
      const current = atBottom
        ? rects.filter((r) => r.rect && r.rect.top < window.innerHeight).pop()
        : rects.find((r) => r.rect && r.rect.top <= mid && r.rect.bottom > mid);
      if (current) setActive(current.slug);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const playState: PlayState = { playingId, play: setPlayingId };

  return (
    <div className="portfolio-library">
      <aside className="portfolio-nav-col">
        <BrandNav active={active} />
      </aside>
      <div className="portfolio-sections">
        {brands.map((brand) => (
          <BrandSection key={brand.slug} brand={brand} playState={playState} />
        ))}
      </div>
    </div>
  );
}
