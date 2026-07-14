"use client";

import { MapPin } from "lucide-react";

const cities = [
  "Portland",
  "Milwaukie",
  "Lake Oswego",
  "Oregon City",
  "West Linn",
  "Happy Valley",
  "Clackamas",
  "Beaverton",
  "Tigard",
  "Tualatin",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={24} className="text-[#B3530D]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
            Serving the Portland Metro Area
          </h2>
          <p className="text-[#2D2D2D]/70 text-lg max-w-xl mx-auto">
            Based in Milwaukie, Oregon. We travel throughout the greater
            Portland area.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {cities.map((city) => (
            <span
              key={city}
              className="bg-white border border-[#E5E0D8] text-[#2D2D2D] px-5 py-2.5 text-sm font-medium rounded-sm"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
