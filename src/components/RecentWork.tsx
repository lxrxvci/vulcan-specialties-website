import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workPhotos } from "@/lib/work";

const previewSrcs = [
  "/work/kitchen-finished.jpg",
  "/work/staircase-rebuild.jpg",
  "/work/sunroom-floor.jpg",
  "/work/flooring-install.jpg",
];

const previewPhotos = previewSrcs.map(
  (src) => workPhotos.find((p) => p.src === src)!
);

export default function RecentWork() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
            Our Recent Work
          </h2>
          <p className="text-[#2D2D2D]/70 text-lg max-w-2xl mx-auto">
            A look at what we&apos;ve been building lately across the Portland
            metro area.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {previewPhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/work"
              className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#E8A87C]">
                  {photo.tag}
                </span>
                <span className="text-white text-sm leading-snug line-clamp-2">
                  {photo.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-[#B3530D] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#8f420a] transition-colors"
          >
            View All Our Work
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
