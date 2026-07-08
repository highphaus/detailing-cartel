import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] text-white/40 py-12 text-[10px] font-medium tracking-wider font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-4">
          <img
            src="/images/detailing cartel.png"
            alt="Detailing Cartel Logo"
            className="h-9 w-auto object-contain"
           />
          <span>© 2026 DETAILING CARTEL. LAB COATING HUB.</span>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white/60">
          <a href="mailto:info@detailingcartel.com" className="hover:text-[#E9001A] transition-colors duration-200 uppercase">
            info@detailingcartel.com
          </a>
          <a href="https://wa.me/917306533407" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9001A] transition-colors duration-200 uppercase">
            WhatsApp: +91 73065 33407
          </a>
          <a href="https://www.instagram.com/detai.lingcartel" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9001A] transition-colors duration-200 uppercase">
            Instagram: @detai.lingcartel
          </a>
        </div>

        <div className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
          SECURE TRANSMISSION ENCRYPTED
        </div>
      </div>
    </footer>
  );
}