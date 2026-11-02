import React, { useState, useEffect } from 'react';
import { IslamicStar } from './IslamicOrnaments';
import { Calendar, Sparkles } from 'lucide-react';

// Target: 5 November 2026, 8:00 PM (Bangladesh time, UTC+6)
const TARGET_DATE_ISO = '2026-11-05T20:00:00+06:00';
const TARGET_TIMESTAMP = new Date(TARGET_DATE_ISO).getTime();

// Bengali digit conversion
export const toBengaliNumber = (num, minDigits = 2) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const padded = String(Math.max(0, num)).padStart(minDigits, '0');
  return padded
    .split('')
    .map((char) => {
      const d = parseInt(char, 10);
      return isNaN(d) ? char : bengaliDigits[d];
    })
    .join('');
};

export const Countdown = ({ forceEnded = false }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    if (forceEnded) return null;
    const diff = TARGET_TIMESTAMP - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    if (forceEnded) return;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = TARGET_TIMESTAMP - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const timerId = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [forceEnded]);

  // When countdown has ended
  if (forceEnded || !timeLeft) {
    return (
      <div 
        className="w-full max-w-xl mx-auto my-4 sm:my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a3a2c] via-[#052219] to-[#02140f] border-2 border-gold-400 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-center animate-pulse"
        role="status"
        aria-live="polite"
      >
        <div className="flex justify-center mb-3 text-gold-300">
          <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#fff4d1] font-serifBangla tracking-wide drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]">
          মাহফিল শুরু হয়েছে।
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gold-200/80 font-sansBangla">
          আল্লাহর রহমতে মাহফিলের কার্যক্রম চলমান রয়েছে।
        </p>
      </div>
    );
  }

  const units = [
    { label: 'দিন', value: toBengaliNumber(timeLeft.days, 2), raw: timeLeft.days },
    { label: 'ঘণ্টা', value: toBengaliNumber(timeLeft.hours, 2), raw: timeLeft.hours },
    { label: 'মিনিট', value: toBengaliNumber(timeLeft.minutes, 2), raw: timeLeft.minutes },
    { label: 'সেকেন্ড', value: toBengaliNumber(timeLeft.seconds, 2), raw: timeLeft.seconds, isSec: true },
  ];

  return (
    <section 
      className="w-full max-w-3xl mx-auto my-3 sm:my-5 px-1 sm:px-4"
      aria-label="কাউন্টডাউন টাইমার"
    >
      {/* Header with calendar date notice */}
      <div className="flex justify-center text-center mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-300 text-[0.72rem] sm:text-xs md:text-sm font-sansBangla shadow-inner max-w-full">
          <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" aria-hidden="true" />
          <span className="leading-tight">৫ নভেম্বর ২০২৬, রাত ৮:০০ টা (বাংলাদেশ সময়)</span>
        </div>
      </div>

      {/* Countdown 4 Tiles Grid */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4">
        {units.map((unit, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#083024]/90 via-[#041c15]/95 to-[#02100b] border border-gold-500/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:border-gold-400/60 transition-all duration-300"
          >
            {/* Soft top inner highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
            
            {/* Number Display */}
            <div className="relative py-0.5 sm:py-1">
              <span className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-serifBangla tracking-tight ${unit.isSec ? 'text-[#fff8db] drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]' : 'text-[#fbeebe]'}`}>
                {unit.value}
              </span>
            </div>

            {/* Unit Label */}
            <div className="mt-0.5 sm:mt-1.5 text-[0.68rem] sm:text-xs md:text-sm lg:text-base font-semibold text-gold-300/90 font-serifBangla tracking-wider leading-normal py-0.5">
              {unit.label}
            </div>

            {/* Decorative bottom micro-accent */}
            <div className="absolute bottom-1 w-1.5 sm:w-2 h-0.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};
