import React, { useState } from 'react';

const navItems = [
  { label: 'Studio', href: '#hero' },
  { label: 'Metrics', href: '#stats' },
  { label: 'Services', href: '#services' },
  { label: 'Before / After', href: '#slider-section' },
  { label: 'Lab Config', href: '#configurator' },
  { label: 'Packages', href: '#pricing' },
];

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/92 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)] py-1'
          : 'bg-gradient-to-b from-[#050505]/85 via-[#050505]/45 to-transparent py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="group relative w-36 sm:w-56 h-10 sm:h-12 flex items-center shrink-0"
            aria-label="Detailing Cartel Home"
          >
            <img
              src="/images/detailing cartel nav.png"
              alt="Detailing Cartel Logo"
              className="absolute left-0 top-1/2 -translate-y-[45%] h-18 sm:h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] z-50 drop-shadow-[0_6px_16px_rgba(0,0,0,0.65)]"
             
            />

            
          </a>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B5B5BE] hover:text-white transition-colors duration-300 py-2"
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#E9001A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-[#E9001A]/30 bg-[#E9001A] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              Book Now
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-black"
              aria-label="Toggle menu"
            >
              <span className="text-xl leading-none">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0'
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#C7C7CE] transition-colors duration-300 hover:text-[#E9001A] last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#E9001A] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}