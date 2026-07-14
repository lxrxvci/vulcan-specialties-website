import Link from "next/link";
import { Mail, Phone, MapPin, Shield, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#F0EBE3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-wider text-[#2D2D2D] font-[family-name:var(--font-heading)]">
                VULCAN <span className="font-normal">SPECIALTIES</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#B3530D] mt-1">
                Restore + Build
              </span>
            </Link>
            <p className="text-[#2D2D2D]/70 text-sm leading-relaxed max-w-sm mb-6">
              A family-run residential general contractor serving the Portland
              metro area with care, skill, and integrity.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#2D2D2D]/70">
              <Shield size={16} className="text-[#B3530D]" />
              <span>Licensed, Bonded & Insured</span>
            </div>
            <div className="text-sm text-[#2D2D2D]/70 mt-1 ml-6">
              Oregon CCB #256350
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#2D2D2D] mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#2D2D2D]/70 text-sm hover:text-[#B3530D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[#2D2D2D] mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:971-322-9148"
                  className="flex items-center gap-2 text-[#2D2D2D]/70 text-sm hover:text-[#B3530D] transition-colors"
                >
                  <Phone size={16} />
                  971-322-9148
                </a>
              </li>
              <li>
                <a
                  href="mailto:rheo.vulcanspecialties@gmail.com"
                  className="flex items-center gap-2 text-[#2D2D2D]/70 text-sm hover:text-[#B3530D] transition-colors"
                >
                  <Mail size={16} />
                  rheo.vulcanspecialties@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-[#2D2D2D]/70 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  18019 SE Blanton St
                  <br />
                  Milwaukie, OR 97267
                </span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vulcan_specialties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2D2D2D]/70 text-sm hover:text-[#B3530D] transition-colors"
                >
                  <InstagramIcon size={16} />
                  @vulcan_specialties
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E0D8] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#2D2D2D]/50 text-xs">
            &copy; {new Date().getFullYear()} Vulcan Specialties LLC. All
            rights reserved.
          </p>
          <p className="text-[#2D2D2D]/50 text-xs">
            Oregon CCB #256350 | Residential General Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
