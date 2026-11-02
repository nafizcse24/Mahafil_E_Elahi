import React from 'react';

// Islamic 8-Pointed Star (Rub el Hizb)
export const IslamicStar = ({ className = "w-6 h-6 text-gold-500", glow = false }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={`${className} ${glow ? 'filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' : ''}`}
    aria-hidden="true"
  >
    <g transform="translate(50,50)">
      {/* Square 1 */}
      <rect x="-35" y="-35" width="70" height="70" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="3" />
      {/* Square 2 rotated 45 deg */}
      <rect x="-35" y="-35" width="70" height="70" transform="rotate(45)" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="3" />
      {/* Inner decorative circle */}
      <circle r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle r="12" fill="currentColor" fillOpacity="0.6" />
      <circle r="4" fill="#fff7d6" />
    </g>
  </svg>
);

// Arabesque Horizontal Divider with central star
export const ArabesqueDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-xl mx-auto py-2 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/40 to-gold-400" />
    <div className="flex items-center gap-1.5 text-gold-400">
      <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70" />
      <IslamicStar className="w-5 h-5 text-gold-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/40 to-gold-400" />
  </div>
);

// Hanging Islamic Lantern (Fanous)
export const HangingLantern = ({ className = "", ropeLength = 60 }) => (
  <div className={`flex flex-col items-center pointer-events-none ${className}`}>
    {/* Rope / Chain */}
    <div 
      className="w-[1.5px] bg-gradient-to-b from-transparent via-gold-500/60 to-gold-400"
      style={{ height: `${ropeLength}px` }} 
    />
    {/* Lantern Body */}
    <div className="relative animate-pulse-slow">
      <svg width="44" height="66" viewBox="0 0 50 75" fill="none" className="text-gold-400 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
        {/* Top Ring */}
        <circle cx="25" cy="6" r="4" stroke="currentColor" strokeWidth="2" />
        {/* Dome cap */}
        <path d="M12 20 C18 10, 32 10, 38 20 Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M25 10 L25 20" stroke="#020c08" strokeWidth="1.5" />
        {/* Glass midsection */}
        <polygon points="12,20 8,46 42,46 38,20" fill="url(#lanternGlow)" stroke="currentColor" strokeWidth="2" />
        {/* Internal candle glow */}
        <ellipse cx="25" cy="33" rx="7" ry="10" fill="#fff5d6" fillOpacity="0.85" filter="blur(1px)" />
        {/* Base */}
        <polygon points="8,46 15,58 35,58 42,46" fill="currentColor" fillOpacity="0.8" stroke="currentColor" strokeWidth="1.5" />
        {/* Bottom pendant */}
        <polygon points="25,58 21,68 29,68" fill="currentColor" />
        <circle cx="25" cy="71" r="2" fill="currentColor" />
        
        <defs>
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffea9f" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#d4af37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5c4516" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
      {/* Ambient glow light under lantern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold-400/15 rounded-full blur-xl pointer-events-none" />
    </div>
  </div>
);

// Traditional Islamic Arch Crest / Mihrab frame header
export const IslamicCrest = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 200 60" fill="none" className="w-48 sm:w-60 h-auto text-gold-500/70" aria-hidden="true">
      {/* Arch apex */}
      <path
        d="M 10 55 C 40 55, 60 45, 80 30 C 90 20, 95 10, 100 5 C 105 10, 110 20, 120 30 C 140 45, 160 55, 190 55"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M 30 55 C 50 55, 70 48, 85 36 C 93 28, 97 18, 100 14 C 103 18, 107 28, 115 36 C 130 48, 150 55, 170 55"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="100" cy="5" r="3" fill="currentColor" />
    </svg>
  </div>
);

// Corner Arabesque Ornament for Cards
export const CornerOrnament = ({ position = "tl" }) => {
  const rotation = {
    tl: "rotate-0 top-1.5 left-1.5",
    tr: "rotate-90 top-1.5 right-1.5",
    br: "rotate-180 bottom-1.5 right-1.5",
    bl: "-rotate-90 bottom-1.5 left-1.5",
  }[position];

  return (
    <div className={`absolute pointer-events-none text-gold-400/60 ${rotation}`}>
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
        <path d="M 0 0 L 24 0 C 24 10, 18 18, 10 18 L 10 10 L 0 10 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M 1 1 L 28 1 L 28 6 C 20 6, 15 11, 15 20 L 15 28 L 1 28 Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
};
