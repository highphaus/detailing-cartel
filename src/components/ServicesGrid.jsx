import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServicesGrid() {
  const services = [
  {
    id: "01",
    title: "Ceramic & Borophene Coating",
    desc:
      "Advanced ceramic and borophene coating technology permanently bonds with your vehicle's clear coat, creating an ultra-hard protective layer that delivers exceptional gloss and long-lasting durability.",

    features: [
      "Superior UV Protection",
      "Chemical Resistance",
      "Hydrophobic Water Beading",
      "Long Lasting Showroom Gloss",
    ],

    label: "PROTECTION",
    spec: "9H & 10H Shield",
    glow: "group-hover:bg-[#E9001A]/10",
  },

  {
    id: "02",
    title: "Ceramic Infused Car Wash Concentrate",

    desc:
      "Advanced ceramic formula that delivers superior cleaning with long lasting protection and an incredible showroom shine. Ceramic infused car wash concentrate that creates a protective layer guarding your car from UV rays, dirt and pollution.",

    features: [
      "Superior Protection",
      "Long Lasting Gloss",
      "Water Beading & Easy Cleaning",
      "UV & Chemical Resistance",
      "Safe for All Surfaces",
    ],

    label: "MAINTENANCE",
    spec: "Ceramic Infused",
    glow: "group-hover:bg-white/10",
  },

  {
    id: "03",

    title: "MAFRA Super Wax",

    desc:
      "Premium synthetic wax designed to deliver a deep mirror-like shine and long lasting protection. Advanced formula forms a durable barrier against dirt, water-spots and harmful elements keeping your car looking new for longer.",

    features: [
      "Deep Cleaning Power",
      "Brilliant Shine",
      "Paint Protection",
      "Smooth & Glossy Finish",
      "Safe for All Paint Types",
    ],

    label: "PREMIUM FINISH",

    spec: "MAFRA Super Wax",

    glow: "group-hover:bg-[#E9001A]/10",
  },

  {
    id: "04",

    title: "Paint Protection Film (PPF)",

    desc:
      "Premium self-healing TPU film absorbs stone chips, scratches and road debris while maintaining crystal-clear optical transparency for years.",

    features: [
      "Scratch Protection",
      "Rock Chip Defense",
      "Self Healing Surface",
      "Crystal Clear Finish",
    ],

    label: "ARMOR LEVEL",

    spec: "Self-Healing TPU",

    glow: "group-hover:bg-white/10",
  },

  {
    id: "05",

    title: "Custom Styling & Sunfilms",

    desc:
      "Computer precision installed styling films and premium heat rejection window films engineered for maximum comfort and enhanced aesthetics.",

    features: [
      "97% IR Heat Rejection",
      "UV Blocking",
      "Premium Styling",
      "Fade Resistant",
    ],

    label: "THERMAL",

    spec: "97% IR Shield",

    glow: "group-hover:bg-[#E9001A]/10",
  },
];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 sm:px-6 py-24 border-t border-white/5 font-sans"
    >
      <div className="text-center mb-16">
        <span className="text-[#E9001A] font-black uppercase tracking-[0.4em] text-xs">
          OUR SERVICES
        </span>
        <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
          Premium Detailing <br className="hidden sm:block" />
          & Protection Solutions
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16 !items-stretch"
        style={{ alignItems: 'stretch' }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} style={{ height: 'auto' }} className="flex">
            <div className="group relative bg-[#0C0C0E] border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-all duration-500 w-full h-full flex flex-col">
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.glow}`} />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-6">
                  <span className="text-[#E9001A] text-3xl font-black">
                    {service.id}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#9E9EA7] text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                <div className="mb-6 pt-6 border-t border-white/5">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7] block mb-3">
                    Uses and benefits
                  </span>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#E9001A] mt-1">•</span>
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-white/60">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7] block">
                      {service.label}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white mt-1 block">
                      {service.spec}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-[#E9001A] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}