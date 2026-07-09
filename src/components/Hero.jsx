import React from 'react';
import heroStudio from '../assets/hero_studio.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden font-sans">

      {/* ── Full-bleed hero image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStudio}
          alt="Detailing Cartel Studio"
          className="w-full h-full object-cover object-right"
        />
        {/* Subtle gradient at the top so nav is always readable */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      {/* ── Red ambient glow at bottom ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[#E9001A]/8 blur-3xl rounded-full pointer-events-none z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 flex items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20">
        <div className="max-w-xl flex flex-col items-start text-left space-y-8">
          
          {/* Brand Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] text-shadow-heavy">
              DETAILING <br />
              <span className="text-[#E9001A] text-glow-neon">CARTEL</span>
            </h1>
            <p className="text-black text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-shadow-light">
              Clean • Protect • Perfect
            </p>
          </div>

          {/* Description */}
          <p className="text-black/85 text-xs sm:text-sm font-bold leading-relaxed max-w-md text-shadow-light">
            An elite collective of automotive perfectionists focused on deploying advanced surface protection systems, securing gloss integrity, and perfecting factory clear coats.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#configurator"
              className="bg-[#E9001A] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black hover:shadow-[0_4px_30px_rgba(233,0,26,0.4)] transition-all duration-300"
            >
              DEPLOY SHIELD
            </a>
            <a
              href="#slider-section"
              className="border border-white/20 hover:border-[#E9001A] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center space-x-2 transition-all duration-300 bg-black/30 backdrop-blur-sm hover:bg-black/50"
            >
              <svg className="w-4 h-4 fill-current text-[#E9001A]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>WATCH PROCESS</span>
            </a>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-12 flex flex-col items-start space-y-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}