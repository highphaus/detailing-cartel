import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Ceramic Wash",
    heading: "Ceramic Wash & Maintenance",
    description:
      "Keep your vehicle looking fresh with our premium ceramic wash service. Unlike a regular car wash, ceramic-safe cleaning products preserve the ceramic coating while removing dirt, road grime, and contaminants without damaging the protective layer.",
    bullets: [
      "Ceramic-infused premium shampoo",
      "Safe for coated vehicles",
      "High-gloss showroom finish",
      "UV protection",
      "Water-repellent finish",
      "Removes dirt without scratching",
      "Extends ceramic coating lifespan",
      "Professional hand wash process",
    ],
    image: "/images/Ceramic%20Coating%20and%20wash.jpg",
  },
  {
    title: "Paint Protection Film (PPF)",
    heading: "Paint Protection Film (PPF)",
    description:
      "Protect your vehicle's paint with premium Paint Protection Film (PPF), an invisible polyurethane film designed to shield your car from scratches, stone chips, road debris, and environmental damage while maintaining its original finish.",
    bullets: [
      "Self-healing technology",
      "Scratch & stone chip protection",
      "UV resistant",
      "Gloss & matte finish options",
      "Hydrophobic surface",
      "Prevents paint fading",
      "Long-lasting durability",
      "Virtually invisible protection",
    ],
    image: "/images/PPF.jpg",
  },
  {
    title: "Interior Detailing",
    heading: "Interior Deep Cleaning & Detailing",
    description:
      "Restore your vehicle's interior with our professional detailing service. We deep clean every surface, remove stains, eliminate odors, and protect interior materials for a fresh, hygienic driving experience.",
    bullets: [
      "Seat shampooing",
      "Carpet cleaning",
      "Dashboard detailing",
      "Leather conditioning",
      "Plastic restoration",
      "Roof lining cleaning",
      "AC vent sanitization",
      "Door panel cleaning",
      "Steam cleaning",
      "Odor removal",
    ],
    image: "/images/Interior%20deep%20cleaning",
  },
  {
    title: "Underbody Coating",
    heading: "Premium Underbody Coating",
    description:
      "Protect your vehicle's underside from rust, corrosion, moisture, salt, and road debris using premium-grade underbody coating solutions. Our professional application extends your vehicle's lifespan and enhances long-term durability.",
    bullets: [
      "3M Professional Underbody Coating",
      "TPG coating solutions",
      "Rust prevention",
      "Corrosion resistance",
      "Stone chip protection",
      "Noise reduction",
      "Moisture barrier",
      "Professional spray application",
    ],
    image: "/images/Under%20boady%20couting.jpg",
  },
  {
    title: "Window Film Installation",
    heading: "Premium Window Film Installation",
    description:
      "Enhance comfort, privacy, and protection with our professionally installed automotive window films. Our premium films reduce heat, block harmful UV rays, improve driving comfort, and give your vehicle a premium appearance.",
    bullets: [
      "TRORO window films",
      "3M premium films",
      "Saint-Gobain solutions",
      "Heat rejection",
      "UV protection",
      "Increased privacy",
      "Reduced interior fading",
      "Professional installation",
    ],
    image: "/images/Permium%20Window%20Film%20Installation.jpg",
  },
];

export default function PricingTables() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="reveal mb-10 text-center">
        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#E9001A]">
          Premium Services
        </span>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          Protection & Styling Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#9E9EA7]">
          Explore our signature services designed to protect, preserve, and elevate your vehicle inside and out.
        </p>
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
        style={{ alignItems: "stretch" }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.title} style={{ height: "auto" }} className="flex">
            <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0E] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <img src={service.image} alt={service.title} className="h-52 w-full object-cover" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  {service.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9EA7]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.bullets.slice(0, 4).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-white/90">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E9001A]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}