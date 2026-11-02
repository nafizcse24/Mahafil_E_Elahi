import React, { forwardRef } from 'react';
import { IslamicStar, IslamicCrest, CornerOrnament } from './IslamicOrnaments';
import { Calendar, MapPin, Mic, Award, Sparkles, Radio, Crown, Coins } from 'lucide-react';

export const PosterTemplate = forwardRef(({ speakers: customSpeakers }, ref) => {
  const defaultSpeakers = [
    {
      role: 'প্রধান বক্তা',
      name: 'পীরে কামেল সামিউল ইসলাম কিশোরগঞ্জী বাবাজান।',
      image: '/images/speaker.jpg',
      icon: <Mic className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: true,
    },
    {
      role: 'প্রধান অতিথি',
      name: 'প্লেবয় সাকিক, সাবেক সিআর। (cuckold),পাবনা',
      image: '/images/guest.jpg',
      icon: <Award className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: false,
    },
    {
      role: 'বিশেষ বক্তা',
      name: 'গক গক আবির (ডেমরা,ঢাকা)',
      image: '/images/special_speaker.jpg',
      icon: <Sparkles className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: false,
    },
    {
      role: 'সঞ্চালক',
      name: 'মুক্তিযোদ্ধা নাফিজ (কুষ্টিয়া)',
      image: '/images/moderator.jpg',
      icon: <Radio className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: false,
    },
    {
      role: 'সভাপতি',
      name: 'কামলা রোমান (ACR),মাগুরা',
      image: '/images/roman.jpg',
      icon: <Crown className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: false,
    },
    {
      role: 'অর্থদাতা',
      name: 'চাঁদাবাজ আলভি (রাজশাহী)',
      image: '/images/alvi.png',
      icon: <Coins className="w-3.5 h-3.5 text-gold-300" />,
      isPrimary: false,
    },
  ];

  const speakers = customSpeakers || defaultSpeakers;

  return (
    <div
      ref={ref}
      style={{ width: '800px', height: '1000px', minWidth: '800px', minHeight: '1000px' }}
      className="relative flex flex-col justify-between bg-gradient-to-b from-[#031710] via-[#020e0a] to-[#010805] text-[#fbf5e2] p-7 overflow-hidden select-none"
    >
      {/* Background Lattice Pattern */}
      <div className="absolute inset-0 pointer-events-none islamic-lattice opacity-40" aria-hidden="true" />
      
      {/* Radial Gold & Emerald Glows */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-gold-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-emerald-600/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Gilded Frame & Border */}
      <div className="relative w-full h-full flex flex-col justify-between rounded-2xl border-2 border-gold-500/40 p-6 bg-gradient-to-b from-[#05281e]/85 via-[#02150f]/92 to-[#010c08]/96 shadow-[0_0_50px_rgba(0,0,0,0.85),inset_0_0_25px_rgba(212,175,55,0.18)]">
        
        {/* 4 Corner Ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Top Header Section */}
        <header className="flex flex-col items-center text-center">
          <IslamicCrest className="mb-0.5 scale-90" />
          <div className="flex items-center gap-2 text-gold-400/80 text-[0.75rem] tracking-widest font-serifBangla uppercase whitespace-nowrap">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold-400/60" />
            <span>বিস্‌মিল্লাহির রাহ্‌মানির রাহীম</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>

          {/* Title: মাহফিল ই এলাহি */}
          <h1 className="text-[3.25rem] font-black font-serifBangla tracking-tight gold-text-shimmer leading-[1.3] pt-1 pb-1">
            মাহফিল ই এলাহি
          </h1>

          {/* Subtitle: হে যুবক আলোর পথে আসো। */}
          <div className="flex items-center justify-center gap-2.5 mt-0.5 whitespace-nowrap">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <p className="text-[1.35rem] font-bold font-serifBangla text-[#fbf0d0] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              হে যুবক আলোর পথে আসো।
            </p>
            <IslamicStar className="w-4 h-4 text-gold-400" />
          </div>

          {/* Date & Time Badge (5 November 2026, 8:00 PM) */}
          <div className="mt-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-gold-500/40 text-gold-200 text-xs font-sansBangla shadow-sm whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>৫ নভেম্বর ২০২৬, রাত ৮:০০ টা (বাংলাদেশ সময়)</span>
          </div>
        </header>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2.5 w-full max-w-lg mx-auto my-1">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-400" />
          <IslamicStar className="w-4 h-4 text-gold-400" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-400" />
        </div>

        {/* 6 Profiles Grid (3 rows x 2 columns) */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 px-1 flex-1 items-center">
          {speakers.map((s, idx) => (
            <div
              key={idx}
              className="relative flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-r from-[#063023]/85 to-[#021811]/85 border border-gold-500/35 backdrop-blur-md shadow-sm h-[94px]"
            >
              {/* Circular Portrait Frame */}
              <div className="relative flex-shrink-0">
                <div className={`rounded-full p-[2px] bg-gradient-to-tr from-gold-500 via-gold-300 to-gold-700 ${s.isPrimary ? 'w-[72px] h-[72px] shadow-[0_0_15px_rgba(212,175,55,0.45)]' : 'w-[66px] h-[66px] shadow-[0_0_10px_rgba(212,175,55,0.25)]'}`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#03150f] border border-gold-400/40">
                    <img
                      src={s.image || s.imageSrc}
                      alt={s.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Text Info (no truncation ellipsis, full names displayed with clean wrapping) */}
              <div className="flex flex-col min-w-0 flex-1 justify-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-950/80 border border-gold-400/50 w-max mb-1">
                  {s.icon}
                  <span className="text-[0.68rem] font-bold text-gold-200 font-serifBangla">
                    {s.role}
                  </span>
                </div>
                <h3 className="text-[0.86rem] font-bold text-[#fff7df] font-serifBangla leading-snug line-clamp-2">
                  {s.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2.5 w-full max-w-lg mx-auto my-1">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-400" />
          <IslamicStar className="w-4 h-4 text-gold-400" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-400" />
        </div>

        {/* Event Venue Section */}
        <footer className="mt-1 flex flex-col items-center text-center">
          <div className="w-full max-w-lg px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#063023]/85 to-[#021510]/95 border border-gold-500/40 shadow-sm flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-gold-950/80 border border-gold-400/40 mb-1">
              <MapPin className="w-3 h-3 text-gold-300" />
              <span className="text-xs font-bold text-gold-200 font-serifBangla">
                স্থান
              </span>
            </div>
            <p className="text-lg font-bold text-[#fff4d6] font-serifBangla leading-tight">
              লালা পড়া রোমানের কার্যালয়
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
});
