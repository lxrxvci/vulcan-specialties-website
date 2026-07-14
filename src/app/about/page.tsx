"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MessageSquare,
  ClipboardList,
  Calculator,
  HardHat,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: MessageSquare,
    title: "Get in Touch",
    description:
      "Call us at 971-322-9148, email, or fill out our contact form. Tell us about your project.",
  },
  {
    icon: ClipboardList,
    title: "Free Consultation",
    description:
      "We'll visit your home, discuss your vision, and understand your goals and budget.",
  },
  {
    icon: Calculator,
    title: "Detailed Estimate",
    description:
      "You'll receive a clear, fair, itemized estimate with no hidden costs or surprises.",
  },
  {
    icon: HardHat,
    title: "Quality Work",
    description:
      "We build it right, on time, with care. You'll work directly with Rheo throughout.",
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough",
    description:
      "We make sure you're 100% satisfied. Your project isn't done until you say it is.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#2D2D2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4">
              About Vulcan Specialties
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              A family-run residential general contractor built on care, skill,
              and relationships.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 md:py-28 bg-[#FAF9F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-6">
                  Rooted in Family. Built on Trust.
                </h2>
                <div className="space-y-4 text-[#2D2D2D]/80 leading-relaxed">
                  <p>
                    Rheo Anderson founded Vulcan Specialties after two decades
                    of working side-by-side with his dad in construction.
                    Growing up in the trade, he learned that great work is about
                    more than tools and materials — it&apos;s about people.
                  </p>
                  <p>
                    Based in Milwaukie, Oregon, Vulcan Specialties brings
                    together 20+ years of hands-on experience with a commitment
                    to treating every home like it&apos;s our own. We
                    understand that inviting someone into your home takes trust,
                    and we don&apos;t take that lightly.
                  </p>
                  <p>
                    We&apos;re not a big corporate contractor, and we
                    don&apos;t want to be. We&apos;re a small family-run
                    company where you work directly with the owner from start to
                    finish. No runaround. No surprises. Just honest, quality
                    work.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E8A87C]/30 to-[#B3530D]/20 rounded-sm p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[#B3530D]/20 rounded-full flex items-center justify-center">
                    <HardHat size={40} className="text-[#B3530D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-2">
                    Rheo Anderson
                  </h3>
                  <p className="text-[#B3530D] font-medium mb-4">
                    Owner & Lead Contractor
                  </p>
                  <p className="text-[#2D2D2D]/60 text-sm max-w-xs mx-auto">
                    Two decades in construction. Licensed, bonded, and insured.
                    Oregon CCB #256350.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-[#F0EBE3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
                How We Work
              </h2>
              <p className="text-[#2D2D2D]/70 text-lg max-w-xl mx-auto">
                A simple, transparent process from first call to finished
                project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-white p-6 rounded-sm border border-[#E5E0D8] text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-[#B3530D]/10 rounded-sm flex items-center justify-center">
                      <Icon size={24} className="text-[#B3530D]" />
                    </div>
                    <div className="text-xs font-semibold text-[#B3530D] uppercase tracking-wider mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#2D2D2D]/60 text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[#2D2D2D] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s talk about what you have in mind. Free estimates, no
              pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors"
            >
              Get Your Free Estimate
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
