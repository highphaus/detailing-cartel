import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import ServicesGrid from './components/ServicesGrid';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Configurator from './components/Configurator';
import PricingTables from './components/PricingTables';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedCoating, setSelectedCoating] = useState('Borophene');
  const [coatingLayers, setCoatingLayers] = useState(3);
  const [formData, setFormData] = useState({ name: '', vehicle: '', service: 'Pro Crystalline', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const attachObservers = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((el) => observer.observe(el));
    };

    attachObservers();

    // Re-observe when DOM elements change dynamically
    const mutationObserver = new MutationObserver(attachObservers);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((el) => observer.unobserve(el));
      mutationObserver.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleSelectPackage = (packageName) => {
    setFormData((prev) => ({ ...prev, service: packageName }));
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCoatingSpecs = () => {
    const baseCost = selectedCoating === 'Ceramic' ? 22000 : selectedCoating === 'Borophene' ? 38000 : 52000;
    const layerMultiplier = selectedCoating === 'Ceramic' ? 4000 : selectedCoating === 'Borophene' ? 6000 : 8000;
    const cost = baseCost + (coatingLayers - 1) * layerMultiplier;

    const curingTime = selectedCoating === 'Ceramic' ? 12 + coatingLayers * 2 : selectedCoating === 'Borophene' ? 18 + coatingLayers * 3 : 24 + coatingLayers * 4;
    const hydrophobicAngle = selectedCoating === 'Ceramic' ? 110 + coatingLayers : selectedCoating === 'Borophene' ? 115 + coatingLayers : 120 + coatingLayers;
    const hardness = selectedCoating === 'Ceramic' ? '9H Pro' : selectedCoating === 'Borophene' ? '10H Ultra' : '10H Diamond Package';

    return { cost, curingTime, hydrophobicAngle, hardness };
  };

  const handleWhatsAppCTA = () => {
    const whatsappNumber = '917306533407';
    const message = 'Hi! I\'m interested in Detailing Cartel services. Can we connect on WhatsApp?';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-[#E9001A] selection:text-white">
      <Header scrolled={scrolled} />
      <Hero />
      <MetricsBar />
      <ServicesGrid />
      <BeforeAfterSlider sliderPosition={sliderPosition} setSliderPosition={setSliderPosition} />
      <Configurator 
        selectedCoating={selectedCoating} setSelectedCoating={setSelectedCoating} 
        coatingLayers={coatingLayers} setCoatingLayers={setCoatingLayers} 
        specs={getCoatingSpecs()} 
      />
      <PricingTables onSelectPackage={handleSelectPackage} />
      <BookingForm 
        formData={formData} setFormData={setFormData} 
        isSubmitted={isSubmitted} onSubmit={handleSubmit} 
      />
      <Footer />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Call Us button */}
        <a
          href="tel:+917306533407"
          aria-label="Call Detailing Cartel"
          className="group flex items-center gap-3"
        >
          {/* Tooltip label */}
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out bg-[#E9001A] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_14px_rgba(233,0,26,0.4)] whitespace-nowrap">
            Call Us
          </span>
          {/* Icon button */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#E9001A]/30 bg-gradient-to-br from-[#E9001A] to-[#b30015] shadow-[0_0_18px_rgba(233,0,26,0.25)] group-hover:shadow-[0_0_28px_rgba(233,0,26,0.55)] transition-all duration-300 transform group-hover:scale-110">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
          </div>
        </a>

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppCTA}
          aria-label="Contact Detailing Cartel on WhatsApp"
          className="group flex items-center gap-3"
        >
          {/* Tooltip label */}
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out bg-[#25D366] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_14px_rgba(37,211,102,0.4)] whitespace-nowrap">
            WhatsApp
          </span>
          {/* Icon button */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-emerald-400/20 bg-gradient-to-br from-[#25D366] to-[#20B358] shadow-[0_0_18px_rgba(37,211,102,0.25)] group-hover:shadow-[0_0_28px_rgba(37,211,102,0.55)] transition-all duration-300 transform group-hover:scale-110">
            <svg className="w-9 h-9 text-white" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );

}