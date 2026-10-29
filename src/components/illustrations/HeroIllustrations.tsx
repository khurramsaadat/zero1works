/* Inline SVG geometric illustrations for page hero headers and cards.
   All use the charcoal/slate palette with subtle opacity layers. */

export function PortfolioHeroSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Grid of project cards */}
      <rect x="60" y="40" width="140" height="100" rx="12" fill="#475569" opacity="0.5" />
      <rect x="70" y="50" width="120" height="55" rx="6" fill="#64748b" opacity="0.4" />
      <rect x="70" y="115" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
      <rect x="70" y="125" width="50" height="4" rx="2" fill="#94a3b8" opacity="0.2" />

      <rect x="220" y="40" width="140" height="100" rx="12" fill="#475569" opacity="0.6" />
      <rect x="230" y="50" width="120" height="55" rx="6" fill="#64748b" opacity="0.5" />
      <rect x="230" y="115" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
      <rect x="230" y="125" width="50" height="4" rx="2" fill="#94a3b8" opacity="0.2" />

      <rect x="380" y="40" width="140" height="100" rx="12" fill="#475569" opacity="0.5" />
      <rect x="390" y="50" width="120" height="55" rx="6" fill="#64748b" opacity="0.4" />
      <rect x="390" y="115" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
      <rect x="390" y="125" width="50" height="4" rx="2" fill="#94a3b8" opacity="0.2" />

      <rect x="540" y="40" width="140" height="100" rx="12" fill="#475569" opacity="0.6" />
      <rect x="550" y="50" width="120" height="55" rx="6" fill="#64748b" opacity="0.5" />
      <rect x="550" y="115" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
      <rect x="550" y="125" width="50" height="4" rx="2" fill="#94a3b8" opacity="0.2" />

      {/* Second row offset */}
      <rect x="140" y="160" width="140" height="100" rx="12" fill="#475569" opacity="0.35" />
      <rect x="150" y="170" width="120" height="55" rx="6" fill="#64748b" opacity="0.3" />
      <rect x="150" y="235" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.2" />

      <rect x="300" y="160" width="140" height="100" rx="12" fill="#475569" opacity="0.4" />
      <rect x="310" y="170" width="120" height="55" rx="6" fill="#64748b" opacity="0.35" />
      <rect x="310" y="235" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.2" />

      <rect x="460" y="160" width="140" height="100" rx="12" fill="#475569" opacity="0.35" />
      <rect x="470" y="170" width="120" height="55" rx="6" fill="#64748b" opacity="0.3" />
      <rect x="470" y="235" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.2" />

      {/* Floating accent circles */}
      <circle cx="720" cy="80" r="30" fill="#94a3b8" opacity="0.08" />
      <circle cx="30" cy="200" r="20" fill="#94a3b8" opacity="0.06" />
      <circle cx="750" cy="230" r="15" fill="#64748b" opacity="0.1" />
    </svg>
  );
}

export function ServicesHeroSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Code editor window */}
      <rect x="80" y="30" width="260" height="180" rx="12" fill="#334155" opacity="0.5" />
      <rect x="80" y="30" width="260" height="28" rx="12" fill="#475569" opacity="0.4" />
      <circle cx="100" cy="44" r="5" fill="#ef4444" opacity="0.4" />
      <circle cx="116" cy="44" r="5" fill="#eab308" opacity="0.4" />
      <circle cx="132" cy="44" r="5" fill="#22c55e" opacity="0.4" />
      {/* Code lines */}
      <rect x="100" y="72" width="100" height="5" rx="2.5" fill="#94a3b8" opacity="0.3" />
      <rect x="115" y="85" width="140" height="5" rx="2.5" fill="#64748b" opacity="0.25" />
      <rect x="115" y="98" width="90" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
      <rect x="130" y="111" width="120" height="5" rx="2.5" fill="#64748b" opacity="0.25" />
      <rect x="130" y="124" width="80" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
      <rect x="115" y="137" width="60" height="5" rx="2.5" fill="#64748b" opacity="0.25" />
      <rect x="100" y="150" width="40" height="5" rx="2.5" fill="#94a3b8" opacity="0.3" />

      {/* Phone mockup */}
      <rect x="400" y="40" width="100" height="180" rx="16" fill="#334155" opacity="0.5" />
      <rect x="410" y="55" width="80" height="140" rx="4" fill="#475569" opacity="0.3" />
      <rect x="435" y="45" width="30" height="4" rx="2" fill="#64748b" opacity="0.3" />
      <rect x="420" y="65" width="60" height="30" rx="4" fill="#64748b" opacity="0.25" />
      <rect x="420" y="102" width="40" height="4" rx="2" fill="#94a3b8" opacity="0.3" />
      <rect x="420" y="112" width="55" height="3" rx="1.5" fill="#94a3b8" opacity="0.2" />
      <rect x="420" y="125" width="60" height="20" rx="6" fill="#64748b" opacity="0.25" />
      <rect x="420" y="155" width="60" height="20" rx="6" fill="#64748b" opacity="0.2" />

      {/* Gear / settings */}
      <circle cx="600" cy="100" r="50" stroke="#64748b" strokeWidth="3" opacity="0.2" fill="none" />
      <circle cx="600" cy="100" r="20" stroke="#94a3b8" strokeWidth="2" opacity="0.25" fill="none" />
      <line x1="600" y1="45" x2="600" y2="155" stroke="#64748b" strokeWidth="2" opacity="0.15" />
      <line x1="545" y1="100" x2="655" y2="100" stroke="#64748b" strokeWidth="2" opacity="0.15" />
      <line x1="561" y1="61" x2="639" y2="139" stroke="#64748b" strokeWidth="2" opacity="0.12" />
      <line x1="639" y1="61" x2="561" y2="139" stroke="#64748b" strokeWidth="2" opacity="0.12" />

      {/* Chart bars */}
      <rect x="560" y="200" width="18" height="60" rx="4" fill="#64748b" opacity="0.2" />
      <rect x="585" y="180" width="18" height="80" rx="4" fill="#475569" opacity="0.25" />
      <rect x="610" y="220" width="18" height="40" rx="4" fill="#64748b" opacity="0.2" />
      <rect x="635" y="190" width="18" height="70" rx="4" fill="#475569" opacity="0.25" />
      <rect x="660" y="210" width="18" height="50" rx="4" fill="#64748b" opacity="0.2" />

      {/* Decorative dots */}
      <circle cx="750" cy="50" r="8" fill="#94a3b8" opacity="0.08" />
      <circle cx="50" cy="250" r="12" fill="#64748b" opacity="0.06" />
    </svg>
  );
}

export function ProcessHeroSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Connected nodes workflow */}
      <circle cx="120" cy="150" r="40" fill="#334155" opacity="0.4" />
      <circle cx="120" cy="150" r="22" fill="#475569" opacity="0.5" />
      <path d="M110 150 L118 158 L132 142" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      <line x1="160" y1="150" x2="240" y2="150" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />

      <circle cx="300" cy="150" r="40" fill="#334155" opacity="0.45" />
      <circle cx="300" cy="150" r="22" fill="#475569" opacity="0.5" />
      <path d="M288 145 L300 155 L312 138" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      <line x1="340" y1="150" x2="420" y2="150" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />

      <circle cx="480" cy="150" r="40" fill="#334155" opacity="0.5" />
      <circle cx="480" cy="150" r="22" fill="#475569" opacity="0.55" />
      <path d="M468 145 L480 155 L492 138" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      <line x1="520" y1="150" x2="600" y2="150" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />

      <circle cx="660" cy="150" r="40" fill="#334155" opacity="0.55" />
      <circle cx="660" cy="150" r="22" fill="#475569" opacity="0.6" />
      <path d="M648 145 L660 155 L672 138" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      {/* Labels */}
      <text x="120" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11" opacity="0.5" fontFamily="system-ui">Audit</text>
      <text x="300" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11" opacity="0.5" fontFamily="system-ui">Design</text>
      <text x="480" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11" opacity="0.5" fontFamily="system-ui">Build</text>
      <text x="660" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11" opacity="0.5" fontFamily="system-ui">Launch</text>

      {/* Decorative arcs */}
      <path d="M80 60 Q400 -20 720 60" stroke="#475569" strokeWidth="1.5" opacity="0.12" fill="none" />
      <path d="M80 240 Q400 320 720 240" stroke="#475569" strokeWidth="1.5" opacity="0.12" fill="none" />
    </svg>
  );
}

export function BlogHeroSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Blog article cards */}
      <rect x="60" y="40" width="200" height="220" rx="12" fill="#334155" opacity="0.4" />
      <rect x="75" y="55" width="170" height="90" rx="6" fill="#475569" opacity="0.3" />
      <rect x="75" y="158" width="130" height="7" rx="3.5" fill="#94a3b8" opacity="0.3" />
      <rect x="75" y="173" width="160" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
      <rect x="75" y="185" width="140" height="5" rx="2.5" fill="#94a3b8" opacity="0.15" />
      <rect x="75" y="210" width="60" height="20" rx="10" fill="#64748b" opacity="0.25" />
      {/* Pen icon on card */}
      <path d="M145 85 L155 75 L160 80 L150 90 Z" fill="#94a3b8" opacity="0.3" />

      <rect x="290" y="30" width="200" height="220" rx="12" fill="#334155" opacity="0.5" />
      <rect x="305" y="45" width="170" height="90" rx="6" fill="#475569" opacity="0.35" />
      <rect x="305" y="148" width="130" height="7" rx="3.5" fill="#94a3b8" opacity="0.3" />
      <rect x="305" y="163" width="160" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
      <rect x="305" y="175" width="140" height="5" rx="2.5" fill="#94a3b8" opacity="0.15" />
      <rect x="305" y="200" width="60" height="20" rx="10" fill="#64748b" opacity="0.25" />

      <rect x="520" y="50" width="200" height="220" rx="12" fill="#334155" opacity="0.4" />
      <rect x="535" y="65" width="170" height="90" rx="6" fill="#475569" opacity="0.3" />
      <rect x="535" y="168" width="130" height="7" rx="3.5" fill="#94a3b8" opacity="0.3" />
      <rect x="535" y="183" width="160" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
      <rect x="535" y="195" width="140" height="5" rx="2.5" fill="#94a3b8" opacity="0.15" />
      <rect x="535" y="220" width="60" height="20" rx="10" fill="#64748b" opacity="0.25" />

      {/* Decorative elements */}
      <circle cx="760" cy="60" r="20" fill="#94a3b8" opacity="0.06" />
      <circle cx="30" cy="240" r="15" fill="#64748b" opacity="0.08" />
    </svg>
  );
}

export function AboutHeroSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Team / people abstract */}
      <circle cx="300" cy="130" r="55" fill="#334155" opacity="0.3" />
      <circle cx="300" cy="105" r="20" fill="#475569" opacity="0.4" />
      <path d="M265 160 Q300 175 335 160" fill="#475569" opacity="0.35" />

      <circle cx="170" cy="150" r="45" fill="#334155" opacity="0.25" />
      <circle cx="170" cy="128" r="16" fill="#475569" opacity="0.35" />
      <path d="M140 175 Q170 188 200 175" fill="#475569" opacity="0.3" />

      <circle cx="430" cy="150" r="45" fill="#334155" opacity="0.25" />
      <circle cx="430" cy="128" r="16" fill="#475569" opacity="0.35" />
      <path d="M400 175 Q430 188 460 175" fill="#475569" opacity="0.3" />

      <circle cx="540" cy="170" r="38" fill="#334155" opacity="0.2" />
      <circle cx="540" cy="150" r="14" fill="#475569" opacity="0.3" />
      <path d="M515 190 Q540 200 565 190" fill="#475569" opacity="0.25" />

      {/* Connection lines between people */}
      <line x1="215" y1="150" x2="245" y2="140" stroke="#64748b" strokeWidth="1.5" opacity="0.15" />
      <line x1="355" y1="140" x2="385" y2="150" stroke="#64748b" strokeWidth="1.5" opacity="0.15" />
      <line x1="475" y1="160" x2="502" y2="168" stroke="#64748b" strokeWidth="1.5" opacity="0.12" />

      {/* Building / office block */}
      <rect x="620" y="80" width="120" height="160" rx="8" fill="#334155" opacity="0.25" />
      <rect x="635" y="95" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="665" y="95" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="695" y="95" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="635" y="122" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="665" y="122" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="695" y="122" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="635" y="149" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="665" y="149" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="695" y="149" width="20" height="18" rx="3" fill="#475569" opacity="0.2" />
      <rect x="660" y="185" width="40" height="55" rx="4" fill="#475569" opacity="0.25" />

      {/* Manchester pin */}
      <circle cx="80" cy="100" r="12" fill="#475569" opacity="0.3" />
      <circle cx="80" cy="97" r="5" fill="#94a3b8" opacity="0.3" />
      <path d="M80 112 L74 100 L86 100 Z" fill="#475569" opacity="0.3" />

      {/* Decorative arcs */}
      <path d="M50 260 Q400 230 750 260" stroke="#475569" strokeWidth="1" opacity="0.1" fill="none" />
    </svg>
  );
}

/* Inline SVG illustrations for blog categories */
export function BlogCardSvg({ category }: { category: string }) {
  switch (category) {
    case "Web Development":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="40" y="20" width="200" height="130" rx="8" fill="#475569" opacity="0.3" />
          <rect x="40" y="20" width="200" height="22" rx="8" fill="#64748b" opacity="0.25" />
          <circle cx="56" cy="31" r="4" fill="#ef4444" opacity="0.3" />
          <circle cx="68" cy="31" r="4" fill="#eab308" opacity="0.3" />
          <circle cx="80" cy="31" r="4" fill="#22c55e" opacity="0.3" />
          <rect x="56" y="52" width="70" height="4" rx="2" fill="#94a3b8" opacity="0.3" />
          <rect x="66" y="62" width="100" height="4" rx="2" fill="#94a3b8" opacity="0.2" />
          <rect x="66" y="72" width="60" height="4" rx="2" fill="#94a3b8" opacity="0.25" />
          <rect x="76" y="82" width="80" height="4" rx="2" fill="#94a3b8" opacity="0.2" />
          <rect x="56" y="92" width="30" height="4" rx="2" fill="#94a3b8" opacity="0.3" />
          <path d="M280 60 L340 60 L340 140 L280 140 Z" fill="#475569" opacity="0.2" rx="6" />
          <path d="M295 85 L310 100 L325 85" stroke="#94a3b8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <circle cx="360" cy="40" r="15" fill="#94a3b8" opacity="0.06" />
        </svg>
      );
    case "E-Commerce":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="120" y="30" width="160" height="120" rx="10" fill="#475569" opacity="0.25" />
          <path d="M160 90 L180 90 L190 50 L210 110 L230 70 L250 90 L260 90" stroke="#94a3b8" strokeWidth="2.5" opacity="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="80" cy="100" r="30" stroke="#64748b" strokeWidth="2" opacity="0.2" fill="none" />
          <path d="M65 100 L80 90 L80 110 Z" fill="#64748b" opacity="0.2" />
          <rect x="300" y="60" width="60" height="80" rx="8" fill="#475569" opacity="0.2" />
          <circle cx="330" cy="90" r="12" stroke="#94a3b8" strokeWidth="1.5" opacity="0.25" fill="none" />
          <path d="M324 90 L330 96 L338 84" stroke="#94a3b8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        </svg>
      );
    case "Design":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="80" y="30" width="240" height="140" rx="10" fill="#475569" opacity="0.2" />
          <rect x="100" y="50" width="80" height="50" rx="6" fill="#64748b" opacity="0.25" />
          <rect x="190" y="50" width="110" height="24" rx="4" fill="#64748b" opacity="0.2" />
          <rect x="190" y="80" width="70" height="4" rx="2" fill="#94a3b8" opacity="0.2" />
          <rect x="190" y="90" width="90" height="4" rx="2" fill="#94a3b8" opacity="0.15" />
          <rect x="100" y="115" width="50" height="16" rx="8" fill="#64748b" opacity="0.25" />
          <rect x="160" y="115" width="50" height="16" rx="8" fill="#64748b" opacity="0.2" />
          <circle cx="350" cy="60" r="20" fill="#94a3b8" opacity="0.08" />
          <circle cx="60" cy="150" r="14" fill="#64748b" opacity="0.06" />
        </svg>
      );
    case "Mobile Development":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="155" y="15" width="90" height="170" rx="14" fill="#475569" opacity="0.35" />
          <rect x="163" y="32" width="74" height="125" rx="4" fill="#64748b" opacity="0.2" />
          <rect x="185" y="22" width="30" height="4" rx="2" fill="#64748b" opacity="0.3" />
          <rect x="175" y="45" width="50" height="25" rx="4" fill="#94a3b8" opacity="0.15" />
          <rect x="175" y="78" width="30" height="4" rx="2" fill="#94a3b8" opacity="0.25" />
          <rect x="175" y="88" width="45" height="3" rx="1.5" fill="#94a3b8" opacity="0.15" />
          <rect x="175" y="100" width="50" height="14" rx="7" fill="#64748b" opacity="0.2" />
          <circle cx="200" cy="168" r="6" stroke="#94a3b8" strokeWidth="1.5" opacity="0.25" fill="none" />
          <circle cx="310" cy="50" r="25" stroke="#475569" strokeWidth="1.5" opacity="0.12" fill="none" />
          <circle cx="90" cy="140" r="18" stroke="#475569" strokeWidth="1.5" opacity="0.1" fill="none" />
        </svg>
      );
    case "SEO":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="200" cy="95" r="50" stroke="#64748b" strokeWidth="2.5" opacity="0.25" fill="none" />
          <line x1="237" y1="130" x2="280" y2="170" stroke="#64748b" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
          <rect x="60" y="50" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.15" />
          <rect x="60" y="68" width="60" height="6" rx="3" fill="#94a3b8" opacity="0.1" />
          <rect x="280" y="50" width="80" height="10" rx="5" fill="#94a3b8" opacity="0.15" />
          <rect x="280" y="68" width="60" height="6" rx="3" fill="#94a3b8" opacity="0.1" />
          <path d="M160 85 L180 75 L200 90 L220 70 L240 80" stroke="#94a3b8" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "AI & Technology":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="200" cy="100" r="45" stroke="#64748b" strokeWidth="2" opacity="0.25" fill="none" />
          <circle cx="200" cy="100" r="20" fill="#475569" opacity="0.3" />
          <circle cx="200" cy="100" r="8" fill="#64748b" opacity="0.4" />
          {/* Neural network nodes */}
          <circle cx="100" cy="60" r="10" fill="#475569" opacity="0.2" />
          <circle cx="100" cy="140" r="10" fill="#475569" opacity="0.2" />
          <circle cx="300" cy="60" r="10" fill="#475569" opacity="0.2" />
          <circle cx="300" cy="140" r="10" fill="#475569" opacity="0.2" />
          <line x1="110" y1="60" x2="180" y2="90" stroke="#64748b" strokeWidth="1" opacity="0.15" />
          <line x1="110" y1="140" x2="180" y2="110" stroke="#64748b" strokeWidth="1" opacity="0.15" />
          <line x1="220" y1="90" x2="290" y2="60" stroke="#64748b" strokeWidth="1" opacity="0.15" />
          <line x1="220" y1="110" x2="290" y2="140" stroke="#64748b" strokeWidth="1" opacity="0.15" />
        </svg>
      );
    case "Performance":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Speed gauge */}
          <path d="M120 150 A80 80 0 0 1 280 150" stroke="#64748b" strokeWidth="6" opacity="0.2" fill="none" strokeLinecap="round" />
          <path d="M120 150 A80 80 0 0 1 250 80" stroke="#94a3b8" strokeWidth="6" opacity="0.35" fill="none" strokeLinecap="round" />
          <line x1="200" y1="150" x2="240" y2="90" stroke="#475569" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <circle cx="200" cy="150" r="8" fill="#475569" opacity="0.4" />
          <text x="200" y="180" textAnchor="middle" fill="#94a3b8" fontSize="10" opacity="0.3" fontFamily="system-ui">100</text>
        </svg>
      );
    case "Security":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M200 30 L270 60 L270 120 Q270 170 200 185 Q130 170 130 120 L130 60 Z" fill="#475569" stroke="#64748b" strokeWidth="2" opacity="0.25" />
          <path d="M185 105 L195 115 L220 85" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          <circle cx="80" cy="80" r="15" stroke="#475569" strokeWidth="1.5" opacity="0.1" fill="none" />
          <circle cx="320" cy="130" r="20" stroke="#475569" strokeWidth="1.5" opacity="0.1" fill="none" />
        </svg>
      );
    case "Cloud Computing":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M140 130 Q140 90 175 85 Q185 55 220 60 Q255 50 265 80 Q300 75 300 110 Q310 130 290 140 L140 140 Q120 140 140 130 Z" fill="#475569" opacity="0.25" />
          <line x1="180" y1="145" x2="180" y2="175" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.2" />
          <line x1="220" y1="145" x2="220" y2="180" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.2" />
          <line x1="260" y1="145" x2="260" y2="170" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.2" />
          <rect x="168" y="175" width="24" height="18" rx="3" fill="#64748b" opacity="0.2" />
          <rect x="208" y="180" width="24" height="18" rx="3" fill="#64748b" opacity="0.2" />
          <rect x="248" y="170" width="24" height="18" rx="3" fill="#64748b" opacity="0.2" />
        </svg>
      );
    case "Business":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="100" y="60" width="200" height="100" rx="8" fill="#475569" opacity="0.2" />
          <rect x="120" y="80" width="25" height="55" rx="4" fill="#64748b" opacity="0.25" />
          <rect x="155" y="95" width="25" height="40" rx="4" fill="#64748b" opacity="0.2" />
          <rect x="190" y="70" width="25" height="65" rx="4" fill="#64748b" opacity="0.3" />
          <rect x="225" y="85" width="25" height="50" rx="4" fill="#64748b" opacity="0.25" />
          <rect x="260" y="75" width="25" height="60" rx="4" fill="#64748b" opacity="0.2" />
          <path d="M115 135 L290 135" stroke="#94a3b8" strokeWidth="1" opacity="0.15" />
        </svg>
      );
    case "Accessibility":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="200" cy="100" r="60" stroke="#64748b" strokeWidth="2.5" opacity="0.2" fill="none" />
          <circle cx="200" cy="70" r="12" fill="#475569" opacity="0.3" />
          <line x1="200" y1="82" x2="200" y2="120" stroke="#475569" strokeWidth="3" opacity="0.3" strokeLinecap="round" />
          <line x1="175" y1="95" x2="225" y2="95" stroke="#475569" strokeWidth="3" opacity="0.3" strokeLinecap="round" />
          <line x1="200" y1="120" x2="180" y2="145" stroke="#475569" strokeWidth="3" opacity="0.3" strokeLinecap="round" />
          <line x1="200" y1="120" x2="220" y2="145" stroke="#475569" strokeWidth="3" opacity="0.3" strokeLinecap="round" />
        </svg>
      );
    case "DevOps":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Infinity loop */}
          <path d="M130 100 Q130 60 170 60 Q210 60 210 100 Q210 140 250 140 Q290 140 290 100 Q290 60 250 60 Q210 60 210 100 Q210 140 170 140 Q130 140 130 100 Z" stroke="#64748b" strokeWidth="3" opacity="0.25" fill="none" />
          <circle cx="130" cy="100" r="6" fill="#475569" opacity="0.4" />
          <circle cx="290" cy="100" r="6" fill="#475569" opacity="0.4" />
          <circle cx="210" cy="100" r="5" fill="#94a3b8" opacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="100" y="40" width="200" height="120" rx="12" fill="#475569" opacity="0.2" />
          <rect x="120" y="60" width="160" height="60" rx="6" fill="#64748b" opacity="0.15" />
          <rect x="120" y="130" width="100" height="6" rx="3" fill="#94a3b8" opacity="0.2" />
          <rect x="120" y="142" width="70" height="4" rx="2" fill="#94a3b8" opacity="0.15" />
        </svg>
      );
  }
}

/* Process step illustrations - relevant to each phase */
export function ProcessStepSvg({ step }: { step: number }) {
  switch (step) {
    case 1: // UX Audit - magnifying glass + data
      return (
        <svg className="w-full h-full" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="170" cy="110" r="65" stroke="#94a3b8" strokeWidth="3" opacity="0.4" fill="none" />
          <line x1="217" y1="156" x2="270" y2="210" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
          {/* Data inside magnifier */}
          <rect x="135" y="85" width="70" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
          <rect x="135" y="100" width="50" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
          <rect x="135" y="115" width="60" height="5" rx="2.5" fill="#94a3b8" opacity="0.25" />
          <rect x="135" y="130" width="40" height="5" rx="2.5" fill="#94a3b8" opacity="0.2" />
          {/* Chart */}
          <rect x="290" y="70" width="15" height="60" rx="3" fill="#94a3b8" opacity="0.2" />
          <rect x="312" y="90" width="15" height="40" rx="3" fill="#94a3b8" opacity="0.25" />
          <rect x="334" y="60" width="15" height="70" rx="3" fill="#94a3b8" opacity="0.2" />
          <rect x="356" y="80" width="15" height="50" rx="3" fill="#94a3b8" opacity="0.25" />
        </svg>
      );
    case 2: // UX Design - wireframe + pen tool
      return (
        <svg className="w-full h-full" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Wireframe */}
          <rect x="60" y="30" width="180" height="200" rx="10" stroke="#94a3b8" strokeWidth="2" opacity="0.3" fill="none" />
          <rect x="75" y="50" width="150" height="20" rx="4" fill="#94a3b8" opacity="0.15" />
          <rect x="75" y="82" width="70" height="50" rx="4" stroke="#94a3b8" strokeWidth="1.5" opacity="0.2" fill="none" />
          <rect x="155" y="82" width="70" height="24" rx="4" fill="#94a3b8" opacity="0.12" />
          <rect x="155" y="112" width="70" height="20" rx="4" fill="#94a3b8" opacity="0.1" />
          <rect x="75" y="144" width="150" height="12" rx="3" fill="#94a3b8" opacity="0.12" />
          <rect x="75" y="164" width="150" height="12" rx="3" fill="#94a3b8" opacity="0.1" />
          <rect x="75" y="190" width="60" height="22" rx="11" fill="#94a3b8" opacity="0.15" />
          {/* Pen cursor */}
          <path d="M300 80 L320 60 L330 70 L310 90 Z" fill="#94a3b8" opacity="0.35" />
          <path d="M300 80 L295 95 L310 90" fill="#94a3b8" opacity="0.25" />
          {/* Dotted guide lines */}
          <line x1="280" y1="130" x2="370" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" opacity="0.15" />
          <line x1="320" y1="100" x2="320" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" opacity="0.15" />
        </svg>
      );
    case 3: // UI Design - color swatches + layout
      return (
        <svg className="w-full h-full" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Color palette */}
          <circle cx="80" cy="80" r="28" fill="#334155" opacity="0.4" />
          <circle cx="80" cy="80" r="28" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3" />
          <circle cx="130" cy="60" r="22" fill="#475569" opacity="0.35" />
          <circle cx="60" cy="130" r="18" fill="#64748b" opacity="0.3" />
          <circle cx="110" cy="120" r="15" fill="#94a3b8" opacity="0.2" />
          {/* Beautiful layout */}
          <rect x="180" y="40" width="190" height="180" rx="12" fill="#334155" opacity="0.2" />
          <rect x="195" y="55" width="160" height="60" rx="6" fill="#475569" opacity="0.2" />
          <rect x="195" y="125" width="75" height="35" rx="6" fill="#64748b" opacity="0.15" />
          <rect x="280" y="125" width="75" height="35" rx="6" fill="#64748b" opacity="0.15" />
          <rect x="195" y="170" width="160" height="8" rx="4" fill="#94a3b8" opacity="0.12" />
          <rect x="195" y="185" width="120" height="6" rx="3" fill="#94a3b8" opacity="0.1" />
          <rect x="195" y="198" width="70" height="16" rx="8" fill="#475569" opacity="0.2" />
        </svg>
      );
    case 4: // Hand-off / Launch - rocket
      return (
        <svg className="w-full h-full" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Rocket body */}
          <path d="M200 40 Q215 40 220 70 L225 160 Q225 180 200 185 Q175 180 175 160 L180 70 Q185 40 200 40 Z" fill="#475569" opacity="0.35" />
          <ellipse cx="200" cy="80" rx="15" ry="10" fill="#94a3b8" opacity="0.2" />
          {/* Fins */}
          <path d="M175 140 L155 175 L175 165 Z" fill="#64748b" opacity="0.25" />
          <path d="M225 140 L245 175 L225 165 Z" fill="#64748b" opacity="0.25" />
          {/* Flame */}
          <path d="M190 185 Q195 210 200 220 Q205 210 210 185" fill="#94a3b8" opacity="0.2" />
          <path d="M193 185 Q197 205 200 212 Q203 205 207 185" fill="#94a3b8" opacity="0.15" />
          {/* Stars */}
          <circle cx="100" cy="60" r="3" fill="#94a3b8" opacity="0.3" />
          <circle cx="310" cy="90" r="2.5" fill="#94a3b8" opacity="0.25" />
          <circle cx="120" cy="180" r="2" fill="#94a3b8" opacity="0.2" />
          <circle cx="290" cy="40" r="3.5" fill="#94a3b8" opacity="0.2" />
          <circle cx="340" cy="200" r="2" fill="#94a3b8" opacity="0.15" />
          <circle cx="70" cy="130" r="1.5" fill="#94a3b8" opacity="0.25" />
        </svg>
      );
    default:
      return null;
  }
}

/* WhyChooseUs illustration - team collaboration / partnership */
export function WhyChooseUsSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central handshake / partnership */}
      <circle cx="300" cy="180" r="90" fill="#334155" opacity="0.15" />
      <circle cx="300" cy="180" r="60" fill="#475569" opacity="0.12" />

      {/* Left person */}
      <circle cx="260" cy="155" r="18" fill="#475569" opacity="0.4" />
      <path d="M240 195 Q260 210 280 195" fill="#475569" opacity="0.3" />

      {/* Right person */}
      <circle cx="340" cy="155" r="18" fill="#475569" opacity="0.4" />
      <path d="M320 195 Q340 210 360 195" fill="#475569" opacity="0.3" />

      {/* Handshake */}
      <path d="M275 190 L290 185 L300 195 L310 185 L325 190" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" opacity="0.35" fill="none" />

      {/* Floating elements - code, design, growth */}
      {/* Code bracket */}
      <rect x="100" y="80" width="100" height="70" rx="8" fill="#334155" opacity="0.2" />
      <path d="M125 100 L115 115 L125 130" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.3" fill="none" />
      <path d="M165 100 L175 115 L165 130" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" opacity="0.3" fill="none" />
      <line x1="135" y1="130" x2="155" y2="100" stroke="#94a3b8" strokeWidth="1.5" opacity="0.25" />

      {/* Chart */}
      <rect x="420" y="80" width="100" height="70" rx="8" fill="#334155" opacity="0.2" />
      <rect x="435" y="110" width="12" height="25" rx="2" fill="#94a3b8" opacity="0.2" />
      <rect x="453" y="100" width="12" height="35" rx="2" fill="#94a3b8" opacity="0.25" />
      <rect x="471" y="95" width="12" height="40" rx="2" fill="#94a3b8" opacity="0.2" />
      <rect x="489" y="88" width="12" height="47" rx="2" fill="#94a3b8" opacity="0.3" />

      {/* Lightbulb */}
      <circle cx="300" cy="60" r="25" fill="#334155" opacity="0.2" />
      <path d="M290 55 Q300 35 310 55" stroke="#94a3b8" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" />
      <line x1="295" y1="65" x2="305" y2="65" stroke="#94a3b8" strokeWidth="2" opacity="0.25" strokeLinecap="round" />
      <line x1="296" y1="70" x2="304" y2="70" stroke="#94a3b8" strokeWidth="2" opacity="0.2" strokeLinecap="round" />

      {/* Shield */}
      <path d="M150 260 L150 290 Q150 320 180 330 Q210 320 210 290 L210 260 Z" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" opacity="0.18" />
      <path d="M172 290 L178 296 L193 278" stroke="#94a3b8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />

      {/* Gear */}
      <circle cx="430" cy="300" r="22" stroke="#64748b" strokeWidth="2" opacity="0.2" fill="none" />
      <circle cx="430" cy="300" r="10" stroke="#64748b" strokeWidth="1.5" opacity="0.25" fill="none" />
      <line x1="430" y1="275" x2="430" y2="325" stroke="#64748b" strokeWidth="1.5" opacity="0.12" />
      <line x1="405" y1="300" x2="455" y2="300" stroke="#64748b" strokeWidth="1.5" opacity="0.12" />

      {/* Connection lines */}
      <line x1="200" y1="115" x2="245" y2="155" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" opacity="0.12" />
      <line x1="355" y1="155" x2="420" y2="115" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" opacity="0.12" />
      <line x1="300" y1="85" x2="300" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" opacity="0.12" />
    </svg>
  );
}
