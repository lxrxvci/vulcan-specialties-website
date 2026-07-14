import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { workPhotos, workVideos } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work | Vulcan Specialties | Portland Metro Contractor",
  description:
    "See real projects from Vulcan Specialties: kitchen remodels, flooring, dry rot repair, sunroom conversions, custom carpentry, fencing, and more across the Portland metro area.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-16 bg-[#2D2D2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Our Work
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Real projects from real homes across the Portland metro area —
              from full kitchen guts to custom carpentry and everything in
              between.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 md:py-28 bg-[#FAF9F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
                Recent Projects
              </h2>
              <p className="text-[#2D2D2D]/70 text-lg max-w-2xl mx-auto">
                Every project gets the same care — clean demo, solid prep, and
                a finish you&apos;ll be proud of.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {workPhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="break-inside-avoid bg-white border border-[#E5E0D8] rounded-sm overflow-hidden group"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <figcaption className="p-5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#B3530D] mb-1">
                      {photo.tag}
                    </span>
                    <span className="text-[#2D2D2D]/80 text-sm leading-relaxed">
                      {photo.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="py-20 md:py-28 bg-[#F0EBE3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
                See Us in Action
              </h2>
              <p className="text-[#2D2D2D]/70 text-lg max-w-2xl mx-auto">
                Straight from the job site.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {workVideos.map((video) => (
                <figure key={video.src} className="max-w-sm mx-auto w-full">
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={video.poster}
                    className="w-full rounded-sm border border-[#E5E0D8] bg-black"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <figcaption className="pt-4 text-center">
                    <span className="block font-semibold text-[#2D2D2D]">
                      {video.title}
                    </span>
                    <span className="text-[#2D2D2D]/70 text-sm">
                      {video.description}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
