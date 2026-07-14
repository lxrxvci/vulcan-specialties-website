"use client";

import { useEffect, useRef } from "react";
import { Award, Shield, Clock, Star, BadgeCheck } from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Your Vision. Our Priority.",
    text: "What matters most is what you want. From day one, we focus on understanding your goals, your needs, and your style. Whether it's a simple repair or a major remodel, we work closely with you to turn ideas into plans and plans into finished spaces that feel just right.",
  },
  {
    title: "Built to Last. Done with Care.",
    text: "We believe in doing it once — and doing it well. From dry rot repair to room additions, every project is completed with close attention to detail so your project doesn't just look good, it holds up for the long haul.",
  },
  {
    title: "No Runaround. No Surprises.",
    text: "We keep things simple and transparent. You'll work directly with the owner, ensuring responsive communication, realistic timelines, and full transparency. You'll always know what to expect.",
  },
];

const stats = [
  { icon: Clock, label: "20+ Years", sub: "Experience" },
  { icon: Shield, label: "Licensed &", sub: "Insured" },
  { icon: BadgeCheck, label: "$25K", sub: "Bond" },
  { icon: Award, label: "$1M", sub: "Liability Coverage" },
  { icon: Star, label: "5.0", sub: "Google Rating" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".reveal-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="reveal-item opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-6">
            A Contractor Who Cares
          </h2>
          <p className="reveal-item opacity-0 text-lg text-[#2D2D2D]/80 leading-relaxed mb-6">
            Rheo Anderson founded Vulcan Specialties after two decades of
            working side-by-side with his dad in construction. Rooted in
            Milwaukie, Oregon, and built on care, skill, and relationships, we
            know your time and space are valuable.
          </p>
          <p className="reveal-item opacity-0 text-lg text-[#2D2D2D]/80 leading-relaxed">
            We understand that inviting someone into your home takes trust. We
            treat every home like it&apos;s our own, and every client like a
            partner. We&apos;re not here to push a sale — we&apos;re here to
            help bring your ideas to life, solve problems, and leave things
            better than we found them.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value) => (
            <div
              key={value.title}
              className="reveal-item opacity-0 bg-white p-8 rounded-sm border border-[#E5E0D8]"
            >
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 font-[family-name:var(--font-heading)]">
                {value.title}
              </h3>
              <p className="text-[#2D2D2D]/70 text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="reveal-item opacity-0 bg-[#2D2D2D] text-white rounded-sm p-8 md:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {stats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon size={28} className="text-[#E8A87C] mb-2" />
                <span className="text-lg font-bold">{label}</span>
                <span className="text-white/60 text-sm">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
