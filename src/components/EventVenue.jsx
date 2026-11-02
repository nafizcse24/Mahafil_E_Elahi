import React from 'react';
import { CornerOrnament, IslamicStar } from './IslamicOrnaments';
import { MapPin } from 'lucide-react';

export const EventVenue = () => {
  return (
    <section 
      aria-label="অনুষ্ঠান স্থান" 
      className="w-full max-w-2xl mx-auto my-4 sm:my-6 px-1 sm:px-4 animate-fade-in"
    >
      <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#072d22]/90 via-[#041c15]/95 to-[#02110c]/98 backdrop-blur-xl border border-gold-500/35 p-5 sm:p-7 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_10px_35px_-5px_rgba(212,175,55,0.25)]">
        
        {/* Corner Ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Ambient Glow */}
        <div 
          className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-transparent to-transparent pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Header / Venue Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-950/80 via-gold-500/25 to-gold-950/80 border border-gold-400/50 shadow-sm mb-3">
          <MapPin className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gold-200 font-serifBangla">
            স্থান
          </h2>
        </div>

        {/* Subtle Gold Decorative Line with Central Star */}
        <div className="flex items-center justify-center gap-2 w-32 my-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/50" />
          <IslamicStar className="w-3 h-3 text-gold-400/70" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>

        {/* Venue Location Text */}
        <div className="mt-1 sm:mt-2 px-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#fff5db] font-serifBangla tracking-wide leading-relaxed py-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] group-hover:text-gold-100 transition-colors">
            কামলা রোমান এর কার্যালয়
          </p>
        </div>

        {/* Bottom subtle accent */}
        <div className="mt-4 flex items-center justify-center gap-2 text-gold-500/40">
          <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/50 bg-emerald-950" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-gold-500/40 to-transparent" />
        </div>

      </div>
    </section>
  );
};
