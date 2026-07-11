import React from "react";
import heroStudio from "../assets/hero_studio.png";
import heroStudioMobile from "../assets/hero_studio_mobile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Mobile Image */}
        <img
          src={heroStudioMobile}
          alt="Detailing Cartel Studio"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
            sm:hidden
          "
        />

        {/* Desktop Image */}
        <img
          src={heroStudio}
          alt="Detailing Cartel Studio"
          className="
            hidden
            sm:block sm:absolute sm:inset-0
            h-full w-full
            object-cover
            object-[50%_center]
            sm:object-[55%_center]
            md:object-center
            lg:object-center
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-[32rem] sm:pt-0">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="max-w-xs sm:max-w-md lg:max-w-xl">

            <p className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.28em] text-white">
              Clean • Protect • Perfect
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-white">
              An elite collective of automotive perfectionists focused on
              deploying advanced surface protection systems, securing gloss
              integrity, and perfecting factory clear coats.
            </p>

            <div className="mt-8 flex flex-row gap-2 sm:gap-4">

              <a
                href="#configurator"
                className="flex justify-center rounded-xl bg-[#E9001A] px-3 sm:px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black flex-1 sm:flex-none"
              >
                Deploy Shield
              </a>

              <a
                href="#slider-section"
                className="flex justify-center items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111]/90 px-3 sm:px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#E9001A] flex-1 sm:flex-none"
              >
                <svg
                  className="h-3 sm:h-4 w-3 sm:w-4 fill-current text-[#E9001A]"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                Watch Process
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-5 sm:left-8 lg:left-12 z-20">
        <span className="block text-[8px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>

        <div className="mt-2 h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}