"use client";

import { useState } from "react";
import {
  Home,
  Wrench,
  Hammer,
  Trash2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Additions & Custom Projects",
    items: [
      "Room additions & bump-outs",
      "Garage conversions & ADUs",
      "Porch, patio, and deck additions",
      "Custom carpentry & built-ins",
      "Attic and basement conversions",
    ],
  },
  {
    icon: Wrench,
    title: "General Repairs & Handyman",
    items: [
      "Drywall repair & installation",
      "Dry rot repair",
      "Interior & exterior painting",
      "Deck & fence repairs",
    ],
  },
  {
    icon: Hammer,
    title: "Carpentry & Finishing",
    items: [
      "Baseboard, crown molding, wainscoting",
      "Cabinet installation & repair",
      "Closet systems & shelving",
      "Flooring (laminate, hardwood, tile)",
    ],
  },
  {
    icon: Trash2,
    title: "Clean Up & Organization",
    items: [
      "Haul-away of materials & demo debris",
      "Site cleanup & organization",
      "Light demolition",
    ],
  },
];

function ServiceCard({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
  return (
    <div className="bg-white border border-[#E5E0D8] rounded-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F7] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#B3530D]/10 rounded-sm flex items-center justify-center flex-shrink-0">
            <Icon size={24} className="text-[#B3530D]" />
          </div>
          <h3 className="text-lg font-semibold text-[#2D2D2D]">
            {service.title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#B3530D]" />
        ) : (
          <ChevronDown size={20} className="text-[#2D2D2D]/50" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <ul className="space-y-2 ml-16">
            {service.items.map((item) => (
              <li
                key={item}
                className="text-[#2D2D2D]/70 text-sm flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B3530D] mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ServicesGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
            Our Services
          </h2>
          <p className="text-[#2D2D2D]/70 text-lg max-w-2xl mx-auto">
            Licensed, bonded, and insured. Oregon CCB #256350.
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#2D2D2D]/60 text-sm mb-4">
            Don&apos;t see what you need? We offer custom quotes for any project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors"
          >
            Let&apos;s Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
