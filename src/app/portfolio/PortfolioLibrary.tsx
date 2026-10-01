"use client";

import { useEffect, useRef, useState } from "react";
import YouTubeTile from "@/components/YouTubeTile";
import { brands, type PortfolioBrand, type PortfolioVideo } from "./data";

type PlayState = { playingId: string | null; play: (id: string) => void };

function VideoTile({
  id,
  video,
  playState,
  delay = 0,
  reveal = true,
  className = "",
}: {
  id: string;
  video: PortfolioVideo;
  playState: PlayState;
  delay?: number;
  reveal?: boolean;
  className?: string;
}) {
  const playing = playState.playingId === id;

  // Desktop hover: tilt the tile toward the cursor (CSS vars read by .portfolio-frame).
  const tilt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || playing) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--ry", `${x * 10}deg`);
    e.currentTarget.style.setProperty("--rx", `${-y * 10}deg`);
  };
  const untilt = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  };

  return (
    <figure
      className={`portfolio-card ${reveal ? "reveal" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`portfolio-frame portfolio-frame--${video.format}`}
        data-playing={playing || undefined}
        onPointerMove={tilt}
        onPointerLeave={untilt}
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
    <div className="portfolio-rail-wrap reveal">
      <div
        className={`portfolio-rail ${loop ? "portfolio-rail--loop" : ""}`}
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
              reveal={false}
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

function BrandSection({
  brand,
  index,
  playState,
}: {
  brand: PortfolioBrand;
  index: number;
  playState: PlayState;
}) {
  const horizontal = brand.videos.filter((v) => v.format === "horizontal");
  const vertical = brand.videos.filter((v) => v.format === "vertical");
  const [feature, ...rest] = horizontal;
  const dark = index % 2 === 0;

  return (
    <section
      id={brand.slug}
      className={`portfolio-brand ${dark ? "portfolio-brand--dark" : ""}`}
    >
      <div className="portfolio-brand-inner">
        <div className="portfolio-brand-header reveal">
          <div>
            <img src={brand.logo} alt={brand.name} className="portfolio-brand-logo" />
            <p className="portfolio-brand-stat">{brand.stat}</p>
          </div>
          <a href={brand.caseStudyHref} className="cta-button portfolio-case-cta">
            View Case Study
          </a>
        </div>

        {feature && (
          <div className="portfolio-feature">
            <VideoTile id={`${brand.slug}-h0`} video={feature} playState={playState} />
            {rest.length > 0 && (
              <div className="portfolio-feature-row">
                {rest.map((v, i) => (
                  <VideoTile
                    key={i}
                    id={`${brand.slug}-h${i + 1}`}
                    video={v}
                    playState={playState}
                    delay={i * 90}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {vertical.length > 0 && (
          <VerticalRail brand={brand} videos={vertical} playState={playState} />
        )}
      </div>
    </section>
  );
}

export default function PortfolioLibrary() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [active, setActive] = useState(brands[0].slug);

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

  // Fade/slide elements up as they scroll into view.
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll(".reveal") ?? [];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Highlight the tab for the brand section currently in view.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Use the section under the middle of the screen; at the very bottom of
      // the page, fall back to the last section that's on screen.
      const mid = window.innerHeight / 2;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const tops = brands.map((b) => ({
        slug: b.slug,
        rect: document.getElementById(b.slug)?.getBoundingClientRect(),
      }));
      const current = atBottom
        ? tops.filter((t) => t.rect && t.rect.top < window.innerHeight).pop()
        : tops.find((t) => t.rect && t.rect.top <= mid && t.rect.bottom > mid);
      if (current) setActive(current.slug);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const playState: PlayState = { playingId, play: setPlayingId };

  return (
    <div ref={rootRef}>
      <nav className="portfolio-tabs" aria-label="Jump to brand">
        {brands.map((b) => (
          <a
            key={b.slug}
            href={`#${b.slug}`}
            className="portfolio-tab"
            aria-current={active === b.slug ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(b.slug)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {b.name}
          </a>
        ))}
      </nav>
      {brands.map((brand, i) => (
        <BrandSection key={brand.slug} brand={brand} index={i} playState={playState} />
      ))}
    </div>
  );
}
