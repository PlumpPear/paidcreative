"use client";

import { useEffect, useRef, useState } from "react";

const YT_ORIGIN = "https://www.youtube-nocookie.com";

// Click-to-play YouTube video: full-res thumbnail + site-style blue play
// button, swapped for the embed on click. Fills its parent, which sets the
// size/aspect ratio and must be position: relative.
//
// Touch devices won't autoplay an embed added after the tap (YouTube shows its
// own play button and needs a second tap), so there the player loads up front
// underneath the thumbnail, which lets the tap through to it. The JS API tells
// us when it starts so the thumbnail can fade out.
//
// Pass `playing` + `onPlay` to control it (Portfolio does, to coordinate
// rails). Otherwise it manages itself and stops when you click anywhere else.
export default function YouTubeTile({
  youtubeId,
  title,
  playing: controlledPlaying,
  onPlay,
}: {
  youtubeId: string;
  title: string;
  playing?: boolean;
  onPlay?: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ownPlaying, setOwnPlaying] = useState(false);
  const [touch, setTouch] = useState(false);
  const controlled = controlledPlaying !== undefined;
  const playing = controlled ? controlledPlaying : ownPlaying;

  const start = useRef(() => {});
  start.current = () => (controlled ? onPlay?.() : setOwnPlaying(true));

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (controlled || !ownPlaying) return;
    const stop = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOwnPlaying(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOwnPlaying(false);
    document.addEventListener("pointerdown", stop);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", stop);
      document.removeEventListener("keydown", onKey);
    };
  }, [controlled, ownPlaying]);

  // Touch: hear when the preloaded player starts playing.
  useEffect(() => {
    if (!touch) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== YT_ORIGIN || e.source !== frameRef.current?.contentWindow) return;
      let data;
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      const state =
        data?.event === "onStateChange" ? data.info : data?.info?.playerState;
      if (state === 1) start.current();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [touch]);

  // Touch: pause the preloaded player when this tile is told to stop.
  useEffect(() => {
    if (!touch || playing) return;
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
      YT_ORIGIN
    );
  }, [touch, playing]);

  const thumb = (
    <>
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
        }}
        alt=""
        loading="lazy"
      />
      <span className="yt-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </span>
    </>
  );

  if (touch) {
    return (
      <div className="yt-tile" ref={rootRef} data-playing={playing || undefined}>
        <iframe
          ref={frameRef}
          className="yt-player"
          src={`${YT_ORIGIN}/embed/${youtubeId}?enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          onLoad={(e) =>
            e.currentTarget.contentWindow?.postMessage(
              JSON.stringify({ event: "listening", id: youtubeId, channel: "widget" }),
              YT_ORIGIN
            )
          }
        />
        <div className="yt-thumb yt-thumb--cover" aria-hidden="true">
          {thumb}
        </div>
      </div>
    );
  }

  return (
    <div className="yt-tile" ref={rootRef} data-playing={playing || undefined}>
      {playing ? (
        <iframe
          className="yt-player"
          src={`${YT_ORIGIN}/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="yt-thumb"
          onClick={() => start.current()}
          aria-label={`Play ${title}`}
        >
          {thumb}
        </button>
      )}
    </div>
  );
}
