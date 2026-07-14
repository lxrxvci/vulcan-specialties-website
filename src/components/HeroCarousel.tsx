"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Clock, Users } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Kitchen Remodels",
    subtitle: "Transform your kitchen into the heart of your home",
  },
  {
    id: 2,
    title: "Home Additions",
    subtitle: "Expand your living space with custom additions",
  },
  {
    id: 3,
    title: "Dry Rot Repair",
    subtitle: "Protect your home from hidden damage",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background gradient placeholder */}
          <div
            className={`absolute inset-0 ${
              index === 0
                ? "bg-gradient-to-br from-[#3D2B1F] via-[#5C3D2E] to-[#2D2D2D]"
                : index === 1
                ? "bg-gradient-to-br from-[#2D2D2D] via-[#4A3728] to-[#3D2B1F]"
                : "bg-gradient-to-br from-[#4A3728] via-[#2D2D2D] to-[#5C3D2E]"
            }`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight font-[family-name:var(--font-heading)] mb-4 animate-fade-in">
            You Dream It.
            <br />
            <span className="text-[#E8A87C]">We Build It.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;re more than a contractor — we&apos;re your partner in making
            your home feel more like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-all flex items-center gap-2"
            >
              Get Your Free Estimate
              <ChevronRight size={16} />
            </Link>
            <a
              href="tel:971-322-9148"
              className="border-2 border-white/50 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Call Now: 971-322-9148
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {[
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Clock, label: "20+ Years Experience" },
              { icon: Users, label: "Family Owned" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/80"
              >
                <Icon size={18} className="text-[#E8A87C]" />
                <span className="text-xs sm:text-sm uppercase tracking-wider font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
