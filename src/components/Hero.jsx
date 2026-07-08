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
          className="w-full h-full object-cover object-center"
        />
        {/* Strong top overlay so nav is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#050505]/20 to-[#050505]/90" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />
      </div>

      {/* ── Red ambient glow at bottom ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[#E9001A]/8 blur-3xl rounded-full pointer-events-none z-10" />

      {/* ── Content — vertically centered ── */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen max-w-5xl mx-auto px-6 w-full">

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#configurator"
            className="bg-[#E9001A] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black hover:shadow-[0_4px_30px_rgba(233,0,26,0.4)] transition-all duration-300"
          >
            DEPLOY SHIELD
          </a>
          <a
            href="#slider-section"
            className="border border-white/20 hover:border-[#E9001A] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center space-x-2 transition-all duration-300 bg-black/30 backdrop-blur-sm hover:bg-black/50"
          >
            <svg className="w-4 h-4 fill-current text-[#E9001A]" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>WATCH PROCESS</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}