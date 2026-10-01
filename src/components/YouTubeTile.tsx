"use client";

import { useEffect, useRef, useState } from "react";

// Click-to-play YouTube video: full-res thumbnail + site-style blue play
// button, swapped for the embed on click. Fills its parent, which sets the
// size/aspect ratio and must be position: relative.
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
  const [ownPlaying, setOwnPlaying] = useState(false);
  const controlled = controlledPlaying !== undefined;
  const playing = controlled ? controlledPlaying : ownPlaying;

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

  return (
    <div className="yt-tile" ref={rootRef} data-playing={playing || undefined}>
      {playing ? (
        <iframe
          className="yt-player"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="yt-thumb"
          onClick={() => (controlled ? onPlay?.() : setOwnPlaying(true))}
          aria-label={`Play ${title}`}
        >
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
        </button>
      )}
    </div>
  );
}
