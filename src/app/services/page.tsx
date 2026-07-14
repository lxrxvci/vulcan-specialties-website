"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Home,
  Wrench,
  Hammer,
  Trash2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Additions & Custom Projects",
    description:
      "Expand your living space with custom-designed additions that blend seamlessly with your existing home. From concept to completion, we handle every detail.",
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
    description:
      "No job is too small. From quick fixes to comprehensive repairs, we keep your home in top condition with reliable, quality workmanship.",
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
    description:
      "Beautiful details make a house a home. Our precision carpentry and finishing work add character, functionality, and lasting value.",
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
    description:
      "Remodeling creates mess — we make sure it disappears. Our cleanup services keep your project site safe, organized, and ready for the next phase.",
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
          <div>
            <h3 className="text-lg font-semibold text-[#2D2D2D]">
              {service.title}
            </h3>
            <p className="text-sm text-[#2D2D2D]/60 mt-1 hidden sm:block">
              {service.description}
            </p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#B3530D]" />
        ) : (
          <ChevronDown size={20} className="text-[#2D2D2D]/50" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <p className="text-sm text-[#2D2D2D]/70 mb-4 sm:hidden">
            {service.description}
          </p>
          <ul className="space-y-2 ml-0 sm:ml-16">
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

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#2D2D2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              From small repairs to major renovations, we bring craftsmanship
              and care to every project. Oregon CCB #256350.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-[#FAF9F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>

            <div className="mt-12 bg-[#F0EBE3] rounded-sm p-8 text-center">
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">
                Don&apos;t See What You Need?
              </h3>
              <p className="text-[#2D2D2D]/70 mb-6 max-w-lg mx-auto">
                We offer custom quotes and project proposals for whatever you
                have in mind. If it involves improving your home, we can
                probably help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors"
                >
                  Get a Custom Quote
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:971-322-9148"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#2D2D2D] hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  Call 971-322-9148
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
