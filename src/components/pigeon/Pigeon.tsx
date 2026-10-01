"use client";

import { useEffect, useRef, useState } from "react";

// The Paid Creative pigeon (logo cut out, white sticker outline). Click it and
// it coos. Facing right by default; `flip` faces it left without mirroring
// the speech bubble.
export function Pigeon({
  className = "",
  flip = false,
  coo = "Coo!",
}: {
  className?: string;
  flip?: boolean;
  coo?: string;
}) {
  const [coos, setCoos] = useState(0);

  return (
    <span
      className={`pg-pigeon ${className}`}
      onClick={() => setCoos((c) => c + 1)}
      role="img"
      aria-label="Paid Creative pigeon"
    >
      <img
        src="/pigeon.png"
        alt=""
        draggable={false}
        className={`pg-pigeon-img ${flip ? "pg-flip" : ""}`}
      />
      {coos > 0 && (
        <span key={coos} className="pg-bubble pg-coo" aria-hidden="true">
          {coo}
        </span>
      )}
    </span>
  );
}

// Starts a scene the first time it scrolls into view. `run` bumps on replay so
// the scene can be re-keyed to restart its CSS animations.
export function useScene(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const replay = () => {
    setRun((r) => r + 1);
    setPlaying(true);
  };

  return { ref, playing, run, replay };
}
