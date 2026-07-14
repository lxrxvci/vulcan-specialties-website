"use client";

import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#2D2D2D] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
          Let&apos;s talk about your project. We&apos;ll walk through it
          together, give you a fair estimate, and get to work — quickly,
          carefully, and with the kind of care that makes you glad you called.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:971-322-9148"
            className="flex items-center gap-3 bg-white text-[#2D2D2D] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#F0EBE3] transition-colors"
          >
            <Phone size={18} />
            971-322-9148
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors"
          >
            Get Your Free Estimate
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
