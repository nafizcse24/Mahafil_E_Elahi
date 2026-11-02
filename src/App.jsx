import React from 'react';
import { IslamicStar, ArabesqueDivider, HangingLantern, IslamicCrest } from './components/IslamicOrnaments';
import { SpeakerCard } from './components/SpeakerCard';
import { Countdown } from './components/Countdown';
import { EventVenue } from './components/EventVenue';

export default function App() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden bg-[#020b07] text-[#fbf5e2] selection:bg-gold-500/30 selection:text-[#fff9e6] py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      
      {/* Background Layer 1: Ambient Islamic Lattice & Radial Lights */}
      <div className="fixed inset-0 pointer-events-none islamic-lattice opacity-40 z-0" aria-hidden="true" />
      
      {/* Deep Emerald Radial Glows */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-700/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[260px] sm:w-[480px] h-[260px] sm:h-[480px] bg-gold-600/10 rounded-full blur-[90px] pointer-events-none z-0" aria-hidden="true" />

      {/* Hanging Islamic Lanterns on the Left and Right (visible on md+ screens) */}
      <div className="fixed top-0 left-4 lg:left-12 hidden md:block z-10 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
        <HangingLantern ropeLength={65} />
      </div>
      <div className="fixed top-0 right-4 lg:right-12 hidden md:block z-10 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
        <HangingLantern ropeLength={85} />
      </div>

      {/* Outer Luxury Frame Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col items-center">
        
        {/* Main Content Card with Double Gilded Border & Soft Vignette */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-b from-[#041a13]/85 via-[#02130e]/95 to-[#010a07]/98 border border-gold-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(212,175,55,0.25)] backdrop-blur-2xl">
          
          {/* Decorative Corner Filigrees */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-gold-400/50 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-gold-400/50 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-gold-400/50 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-gold-400/50 rounded-br-sm pointer-events-none" />

          {/* Top Calligraphic / Arch Crest */}
          <div className="flex flex-col items-center justify-center text-center mb-2 sm:mb-3">
            <IslamicCrest className="mb-1 scale-90 sm:scale-100" />
            <div className="flex items-center gap-2 text-gold-400/70 text-[0.7rem] sm:text-xs md:text-sm tracking-widest font-serifBangla uppercase">
              <span className="w-4 sm:w-6 h-[1px] bg-gradient-to-r from-transparent to-gold-400/60" />
              <span>বিস্‌মিল্লাহির রাহ্‌মানির রাহীম</span>
              <span className="w-4 sm:w-6 h-[1px] bg-gradient-to-l from-transparent to-gold-400/60" />
            </div>
          </div>

          {/* Title: মাহফিল ই এলাহি */}
          <header className="text-center my-2 sm:my-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-serifBangla tracking-tight gold-text-shimmer">
              মাহফিল ই এলাহি
            </h1>
            
            {/* Subtitle: হে যুবক আলোর পথে আসো। */}
            <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3">
              <IslamicStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 hidden sm:block flex-shrink-0" />
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold font-serifBangla text-[#fbf0d0] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] py-1">
                হে যুবক আলোর পথে আসো।
              </p>
              <IslamicStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 hidden sm:block flex-shrink-0" />
            </div>
          </header>

          {/* Divider */}
          <ArabesqueDivider className="my-4 sm:my-6" />

          {/* Speakers Section: 4 Glass Cards (2 columns on desktop, stacked on mobile) */}
          <section 
            aria-label="সম্মানিত ব্যক্তিবর্গ" 
            className="w-full my-3 sm:my-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
              
              {/* ১. প্রধান বক্তা */}
              <SpeakerCard
                role="প্রধান বক্তা"
                name="পীরে কামেল সামিউল ইসলাম কিশোরগঞ্জী বাবাজান।"
                imageSrc="/images/speaker.jpg"
                fallbackSrcs={[
                  "/images/speaker.png",
                  "/images/speaker.jpeg",
                  "/images/speaker.webp",
                  "/images/pradhan_bokta.jpg",
                  "/images/pradhan_bokta.png"
                ]}
                isPrimary={true}
                iconType="speaker"
              />

              {/* ২. প্রধান অতিথি */}
              <SpeakerCard
                role="প্রধান অতিথি"
                name="প্লেবয় সাকিক, সাবেক সিআর। (cuckold)"
                imageSrc="/images/guest.jpg"
                fallbackSrcs={[
                  "/images/guest.png",
                  "/images/guest.jpeg",
                  "/images/guest.webp",
                  "/images/pradhan_otiti.jpg",
                  "/images/pradhan_otiti.png"
                ]}
                isPrimary={false}
                iconType="guest"
              />

              {/* ৩. বিশেষ বক্তা */}
              <SpeakerCard
                role="বিশেষ বক্তা"
                name="গক গক আবির"
                imageSrc="/images/special_speaker.jpg"
                fallbackSrcs={[
                  "/images/special_speaker.png",
                  "/images/special_speaker.jpeg",
                  "/images/special_speaker.webp",
                  "/images/bishesh_bokta.jpg",
                  "/images/bishesh_bokta.png",
                  "/images/abir.jpg",
                  "/images/abir.png"
                ]}
                isPrimary={false}
                iconType="special_speaker"
              />

              {/* ৪. সঞ্চালক */}
              <SpeakerCard
                role="সঞ্চালক"
                name="নাফিজ বাবা"
                imageSrc="/images/moderator.jpg"
                fallbackSrcs={[
                  "/images/moderator.png",
                  "/images/moderator.jpeg",
                  "/images/moderator.webp",
                  "/images/sanchalok.jpg",
                  "/images/sanchalok.png",
                  "/images/nafiz.jpg",
                  "/images/nafiz.png"
                ]}
                isPrimary={false}
                iconType="moderator"
              />

              {/* ৫. সভাপতি */}
              <SpeakerCard
                role="সভাপতি"
                name="লাল পড়া রোমান"
                imageSrc="/images/president.jpg"
                fallbackSrcs={[
                  "/images/Messenger_creation_DE3A8D03-68FE-4C09-B0E4-4E5D328604E9.jpeg",
                  "/images/roman.jpg",
                  "/images/president.png",
                  "/images/shovapoti.jpg"
                ]}
                isPrimary={false}
                iconType="president"
              />

              {/* ৬. অর্থদাতা */}
              <SpeakerCard
                role="অর্থদাতা"
                name="চাঁদাবাজ আলভি"
                imageSrc="/images/donor.jpg"
                fallbackSrcs={[
                  "/images/IMG-20260908-WA0018.jpeg",
                  "/images/alvi.png",
                  "/images/donor.png",
                  "/images/orthodota.jpg"
                ]}
                isPrimary={false}
                iconType="donor"
              />

            </div>
          </section>

          {/* Divider */}
          <ArabesqueDivider className="my-5 sm:my-7" />

          {/* Countdown Section */}
          <Countdown />

          {/* Divider */}
          <ArabesqueDivider className="my-5 sm:my-7" />

          {/* Event Venue Section */}
          <EventVenue />

        </div>

      </div>

    </main>
  );
}
