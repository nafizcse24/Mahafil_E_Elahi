import React, { useState } from 'react';
import { CornerOrnament, IslamicStar } from './IslamicOrnaments';
import { Mic, Award, Sparkles, Radio, Crown, Coins, User } from 'lucide-react';

export const SpeakerCard = ({ 
  role, 
  name, 
  imageSrc, 
  fallbackSrcs = [], 
  isPrimary = false, 
  iconType = 'speaker' 
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const allSources = [imageSrc, ...fallbackSrcs].filter(Boolean);

  const handleImageError = () => {
    if (currentSrcIndex < allSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const activeSrc = allSources[currentSrcIndex];

  // Size hierarchy: Primary (প্রধান বক্তা) is slightly larger
  const portraitSizeClass = isPrimary
    ? 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48'
    : 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40';

  const glowClass = isPrimary
    ? 'shadow-[0_0_35px_rgba(212,175,55,0.42)]'
    : 'shadow-[0_0_25px_rgba(212,175,55,0.28)]';

  const renderBadgeIcon = () => {
    switch (iconType) {
      case 'speaker':
        return <Mic className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      case 'guest':
        return <Award className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      case 'special_speaker':
        return <Sparkles className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      case 'moderator':
        return <Radio className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      case 'president':
        return <Crown className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      case 'donor':
        return <Coins className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
      default:
        return <Mic className="w-3.5 h-3.5 text-gold-300 flex-shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <div className="relative group w-full flex animate-fade-in">
      {/* Outer ambient glow on hover */}
      <div 
        className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-gold-500/20 via-emerald-600/30 to-gold-500/20 opacity-40 group-hover:opacity-100 blur-lg transition duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Glass Card */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#072d22]/90 via-[#041c15]/95 to-[#02110c]/98 backdrop-blur-xl border border-gold-500/35 px-4 py-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-gold-400/70 hover:shadow-[0_12px_40px_-5px_rgba(212,175,55,0.3)]">
        
        {/* Subtle geometric watermark inside card */}
        <div 
          className="absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.05] text-gold-400 pointer-events-none group-hover:scale-110 group-hover:opacity-[0.09] transition-all duration-500" 
          aria-hidden="true"
        >
          <IslamicStar className="w-full h-full" />
        </div>

        {/* 4 Corner Ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Role Badge */}
        <div className="mb-4 sm:mb-5 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-950/80 via-gold-500/25 to-gold-950/80 border border-gold-400/50 shadow-sm">
            {renderBadgeIcon()}
            <span className="text-xs sm:text-sm font-bold tracking-wider text-gold-200 font-serifBangla">
              {role}
            </span>
          </div>
          
          {/* Subtle accent underline */}
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent mt-2.5" />
        </div>

        {/* Portrait Profile Section */}
        <div className="relative my-2 sm:my-3 flex items-center justify-center">
          {/* Ambient Circular Glow */}
          <div 
            className={`absolute inset-0 rounded-full bg-gold-400/15 blur-xl pointer-events-none ${isPrimary ? 'scale-110' : 'scale-100'}`} 
            aria-hidden="true" 
          />

          {/* Double Antique-Gold Border Frame */}
          <div 
            className={`relative ${portraitSizeClass} rounded-full p-[3px] bg-gradient-to-tr from-gold-600 via-gold-300 to-gold-800 ${glowClass} transition-transform duration-500 group-hover:scale-[1.03]`}
          >
            {/* Inner Dark Rim Spacer */}
            <div className="w-full h-full p-[2px] bg-[#02130e] rounded-full overflow-hidden flex items-center justify-center">
              {/* Inner Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#063024] to-[#02100b] relative flex items-center justify-center">
                {!imageError && activeSrc ? (
                  <img
                    src={activeSrc}
                    alt={name}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* Elegant Antique-Gold Fallback Avatar */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#08382b] to-[#02150f] text-gold-400/80 p-4">
                    <IslamicStar className="w-8 h-8 text-gold-400/40 mb-1" />
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-gold-300/80" />
                    <span className="text-[0.65rem] text-gold-400/60 font-serifBangla mt-1">
                      {role}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Small Islamic 8-Pointed Star Medallion at bottom edge of portrait frame */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#02140e] border border-gold-400/60 flex items-center justify-center shadow-md">
                <IslamicStar className="w-3 h-3 text-gold-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Name & Designation placed elegantly below portrait */}
        <div className="mt-5 sm:mt-6 w-full px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fff7df] font-serifBangla leading-relaxed py-1 tracking-wide group-hover:text-gold-200 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] break-words">
            {name}
          </h3>
        </div>

        {/* Bottom decorative motif */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2 text-gold-500/50">
          <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/60 bg-emerald-950" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-gold-500/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};
