import React, { useState } from "react";

const navItems = [
  { label: "Studio", href: "#hero" },
  { label: "Metrics", href: "#stats" },
  { label: "Services", href: "#services" },
  { label: "Before / After", href: "#slider-section" },
  { label: "Lab Config", href: "#configurator" },
  { label: "Packages", href: "#pricing" },
];

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
         <a
  href="#hero"
  className="relative flex items-center shrink-0 h-20 w-56 sm:w-72 lg:w-80"
  aria-label="Detailing Cartel Home"
>
  <img
    src="/images/detailing cartel_nav.png"
    alt="Detailing Cartel Logo"
    className="
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      h-32
      sm:h-28
      lg:h-32
      w-auto
      max-w-none
      object-contain
    "
  />
</a>

          {/* Desktop Navigation */}
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

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#E9001A] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-white"
              aria-label="Toggle Menu"
            >
              <span className="text-2xl">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[500px] opacity-100 pt-4"
              : "max-h-0 opacity-0 pt-0"
          }`}
        >
          <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-4">

            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#1A1A1A] py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#C7C7CE] hover:text-[#E9001A] last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#E9001A] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
            >
              Book Now
            </a>

          </div>
        </div>

      </div>
    </header>
  );
}