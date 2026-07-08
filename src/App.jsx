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
    const hardness = selectedCoating === 'Ceramic' ? '9H Pro' : selectedCoating === 'Borophene' ? '10H Ultra' : '10H Diamond Matrix';

    return { cost, curingTime, hydrophobicAngle, hardness };
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
    </div>
  );
}