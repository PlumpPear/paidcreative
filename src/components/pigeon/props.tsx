// Comic-strip props for the pigeon scenes. Thick black outlines to match the
// pigeon's sticker style; all inline SVG so there's nothing to load.

export function Burst({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg className={`pg-burst ${className}`} viewBox="0 0 200 120" aria-hidden="true">
      <polygon
        points="100,4 118,30 150,10 146,42 196,40 160,62 192,90 146,84 150,116 116,94 98,118 84,92 50,114 52,84 6,92 40,62 4,38 52,42 46,8 82,30"
        fill="#FFD400"
        stroke="#000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text
        x="100"
        y="73"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontSize={text.length > 8 ? 24 : 30}
        fill="#000"
      >
        {text}
      </text>
    </svg>
  );
}

export function PizzaSlice({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 52" aria-hidden="true">
      <path d="M5 9 Q30 1 55 9 L30 49 Z" fill="#F6C453" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      <path d="M5 9 Q30 1 55 9" stroke="#C0782F" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M5 9 Q30 1 55 9" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" transform="translate(0 -4)" />
      <circle cx="23" cy="19" r="4.5" fill="#D7402B" stroke="#000" strokeWidth="2" />
      <circle cx="37" cy="22" r="4" fill="#D7402B" stroke="#000" strokeWidth="2" />
      <circle cx="30" cy="33" r="3.5" fill="#D7402B" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

export function Bagel({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 44" aria-hidden="true">
      <ellipse cx="40" cy="24" rx="36" ry="17" fill="#D99A4E" stroke="#000" strokeWidth="3" />
      <ellipse cx="40" cy="21" rx="30" ry="12" fill="#E8B86B" />
      <ellipse cx="40" cy="22" rx="9" ry="4.5" fill="#7a4a1c" stroke="#000" strokeWidth="2.5" />
      {[
        [22, 16], [30, 12], [50, 12], [58, 17], [26, 27], [55, 28], [40, 31], [44, 11],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="1.8" ry="1" fill="#fff8e7" transform={`rotate(${i * 37} ${x} ${y})`} />
      ))}
    </svg>
  );
}

export function PoopDrop({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 28" aria-hidden="true">
      <path d="M10 2 Q16 14 16 19 A6 6 0 0 1 4 19 Q4 14 10 2 Z" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <circle cx="10" cy="20" r="2.2" fill="#6b6b5a" />
    </svg>
  );
}

export function PoopSplat({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 50" aria-hidden="true">
      <path
        d="M40 8 Q46 2 50 10 Q60 4 60 16 Q74 14 66 26 Q78 34 62 36 Q64 48 50 42 Q44 50 38 42 Q26 48 26 38 Q10 40 16 28 Q4 20 18 16 Q16 4 30 10 Q34 2 40 8 Z"
        fill="#fff"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <ellipse cx="40" cy="25" rx="7" ry="5" fill="#8a8a72" />
      <circle cx="54" cy="20" r="2.5" fill="#8a8a72" />
      <circle cx="28" cy="31" r="2" fill="#8a8a72" />
      <circle cx="9" cy="10" r="2.5" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <circle cx="73" cy="44" r="2" fill="#fff" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function Car({ className = "" }: { className?: string }) {
  const wheel = (cx: number) => (
    <g className="pg-wheel">
      <circle cx={cx} cy="46" r="10" fill="#111" stroke="#000" strokeWidth="3" />
      <circle cx={cx} cy="46" r="4" fill="#cfcfcf" />
      <path d={`M${cx} 38 L${cx} 54 M${cx - 8} 46 L${cx + 8} 46`} stroke="#cfcfcf" strokeWidth="2" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 124 60" aria-hidden="true">
      <path
        d="M6 40 L6 30 Q8 24 18 23 L34 22 L46 8 Q50 4 58 4 L82 4 Q90 4 94 10 L104 22 Q116 24 118 32 L118 40 Q118 44 114 44 L10 44 Q6 44 6 40 Z"
        fill="#3095ee"
        stroke="#000"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M50 10 L44 22 L68 22 L68 10 Z" fill="#d6ecff" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M74 10 L74 22 L98 22 L91 10 Z" fill="#d6ecff" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="113" cy="31" r="3.2" fill="#FFD400" stroke="#000" strokeWidth="1.5" />
      <rect x="6" y="30" width="6" height="5" fill="#E53935" stroke="#000" strokeWidth="1.5" />
      {wheel(32)}
      {wheel(94)}
    </svg>
  );
}

export function Hydrant({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 62" aria-hidden="true">
      <circle cx="20" cy="7" r="3.5" fill="#E53935" stroke="#000" strokeWidth="2" />
      <path d="M10 22 Q10 10 20 9 Q30 10 30 22 L30 54 L10 54 Z" fill="#E53935" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      <rect x="3" y="28" width="34" height="9" rx="3" fill="#E53935" stroke="#000" strokeWidth="2.5" />
      <rect x="7" y="53" width="26" height="7" rx="1.5" fill="#b3261e" stroke="#000" strokeWidth="2.5" />
      <circle cx="20" cy="42" r="3" fill="#b3261e" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}
