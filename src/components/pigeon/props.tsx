// Comic-strip props for the pigeon scroll scenes. Thick black outlines to
// match the pigeon's sticker style; all inline SVG so there's nothing to load.

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

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1.5 L14.9 8.6 L22.5 9.1 L16.6 14 L18.5 21.5 L12 17.4 L5.5 21.5 L7.4 14 L1.5 9.1 L9.1 8.6 Z"
        fill="#FFD400"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// birddogs-style athletic shorts, hung by the waistband
export function Shorts({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 54" aria-hidden="true">
      <path
        d="M7 9 L57 9 L61 47 Q50 50 38 48 L32 24 L26 48 Q14 50 3 47 Z"
        fill="#2f63c9"
        stroke="#000"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="6" y="4" width="52" height="8" rx="2" fill="#1d3f86" stroke="#000" strokeWidth="2.5" />
      <path d="M5 30 L8 47 M59 30 L56 47" stroke="#fff" strokeWidth="3" />
      <path d="M30 12 Q28 18 25 20 M34 12 Q36 18 39 20" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Clothespin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 18" aria-hidden="true">
      <rect x="1" y="1" width="6" height="16" rx="2" fill="#d9a066" stroke="#000" strokeWidth="1.8" />
    </svg>
  );
}

// NYC cab, split in two layers so the pigeon driver can sit between them:
// TaxiBack (window glass) -> pigeon -> TaxiFront (body with window cut out).
export function TaxiBack({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 100" aria-hidden="true">
      <path d="M70 22 L58 41 L97 41 L97 22 Z" fill="#cfe8ff" />
      <path d="M103 22 L103 41 L149 41 L139 22 Z" fill="#cfe8ff" />
    </svg>
  );
}

export function TaxiFront({ className = "" }: { className?: string }) {
  const wheel = (cx: number) => (
    <g className="pgs-wheel">
      <circle cx={cx} cy="78" r="13" fill="#111" stroke="#000" strokeWidth="3" />
      <circle cx={cx} cy="78" r="5" fill="#d0d0d0" />
      <path d={`M${cx} 67 L${cx} 89 M${cx - 11} 78 L${cx + 11} 78`} stroke="#d0d0d0" strokeWidth="2.2" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 200 100" aria-hidden="true">
      {/* roof sign */}
      <rect x="80" y="3" width="44" height="12" rx="2" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <text x="102" y="12" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="7.5" fill="#000">
        PAID CREATIVE
      </text>
      {/* body, with both windows cut out (even-odd) */}
      <path
        fillRule="evenodd"
        d="M8 72 L8 54 Q10 46 22 44 L50 42 L66 18 Q70 14 78 14 L128 14 Q136 14 140 20 L157 42 Q186 44 192 56 L192 72 Q192 76 188 76 L12 76 Q8 76 8 72 Z M70 22 L58 41 L97 41 L97 22 Z M103 22 L103 41 L149 41 L139 22 Z"
        fill="#FFC72C"
        stroke="#000"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* checker stripe */}
      {Array.from({ length: 17 }, (_, i) => (
        <rect key={i} x={14 + i * 10} y={i % 2 ? 53 : 58} width="10" height="5" fill="#000" />
      ))}
      <line x1="100" y1="42" x2="100" y2="74" stroke="#000" strokeWidth="2" />
      <rect x="112" y="46" width="10" height="3" rx="1.5" fill="#000" />
      <circle cx="186" cy="56" r="4" fill="#fff6c2" stroke="#000" strokeWidth="2" />
      <rect x="6" y="54" width="6" height="6" fill="#E53935" stroke="#000" strokeWidth="1.8" />
      {wheel(50)}
      {wheel(152)}
    </svg>
  );
}
