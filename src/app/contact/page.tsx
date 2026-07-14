"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  ExternalLink,
} from "lucide-react";

const serviceOptions = [
  "Additions or Remodels",
  "New Build (ADU, shed, garage, etc.)",
  "Handyman Services",
  "Dry Rot Repair",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#2D2D2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Let&apos;s Work Together
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Tell us about your project. We&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-[#FAF9F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-white border border-[#E5E0D8] rounded-sm p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-[#2D2D2D]/70">
                      Thanks for reaching out. Rheo will get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-[#E5E0D8] rounded-sm p-8 space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full border-b-2 border-[#E5E0D8] bg-transparent py-3 text-[#2D2D2D] focus:border-[#B3530D] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#B3530D] text-white py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={16} />
                    </button>

                    <p className="text-xs text-[#2D2D2D]/50 text-center">
                      We typically respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 font-[family-name:var(--font-heading)]">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="tel:971-322-9148"
                        className="flex items-center gap-3 text-[#2D2D2D]/70 hover:text-[#B3530D] transition-colors"
                      >
                        <Phone size={18} className="text-[#B3530D]" />
                        <span>971-322-9148</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:rheo.vulcanspecialties@gmail.com"
                        className="flex items-center gap-3 text-[#2D2D2D]/70 hover:text-[#B3530D] transition-colors"
                      >
                        <Mail size={18} className="text-[#B3530D]" />
                        <span>rheo.vulcanspecialties@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <span className="flex items-start gap-3 text-[#2D2D2D]/70">
                        <MapPin
                          size={18}
                          className="text-[#B3530D] mt-0.5 flex-shrink-0"
                        />
                        <span>
                          18019 SE Blanton St
                          <br />
                          Milwaukie, OR 97267
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="flex items-center gap-3 text-[#2D2D2D]/70">
                        <Clock size={18} className="text-[#B3530D]" />
                        <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Map Placeholder */}
                <div className="bg-[#E5E0D8] rounded-sm h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#B3530D] mx-auto mb-2" />
                    <p className="text-sm text-[#2D2D2D]/60">
                      Milwaukie, OR 97267
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Vulcan+Specialties/@45.5427145,-122.6543856,11z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#B3530D] hover:underline mt-2"
                    >
                      View on Google Maps
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vulcan_specialties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#2D2D2D]/70 hover:text-[#B3530D] transition-colors"
                >
                  <Instagram size={18} className="text-[#B3530D]" />
                  <span>Follow us @vulcan_specialties</span>
                  <ExternalLink size={12} />
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
