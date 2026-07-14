"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-wider font-[family-name:var(--font-heading)] ${
                scrolled ? "text-[#2D2D2D]" : "text-white"
              }`}
            >
              VULCAN <span className="font-normal">SPECIALTIES</span>
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase ${
                scrolled ? "text-[#B3530D]" : "text-white/80"
              }`}
            >
              Restore + Build
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#B3530D] ${
                  scrolled ? "text-[#2D2D2D]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/vulcan_specialties"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-[#B3530D] ${
                scrolled ? "text-[#2D2D2D]" : "text-white"
              }`}
            >
              <Instagram size={20} />
            </a>
            <Link
              href="/contact"
              className="bg-[#B3530D] text-white px-5 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-[#8f420a] transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#2D2D2D]" />
            ) : (
              <Menu
                size={24}
                className={scrolled ? "text-[#2D2D2D]" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#2D2D2D] text-sm font-medium uppercase tracking-wide py-2 hover:text-[#B3530D]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/vulcan_specialties"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#2D2D2D] text-sm py-2 hover:text-[#B3530D]"
            >
              <Instagram size={18} /> Instagram
            </a>
            <Link
              href="/contact"
              className="block bg-[#B3530D] text-white text-center px-5 py-3 text-sm font-medium uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
