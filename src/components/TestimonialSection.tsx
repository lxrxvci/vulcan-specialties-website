"use client";

import { useEffect, useRef } from "react";
import {
  Home,
  Wrench,
  Hammer,
  Trash2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reviews = [
  {
    name: "rodger braden",
    text: "I never write reviews, but Vulcan Specialties has been excellent through the multiple projects we've worked on together. Finding a great contractor is really hard to come by these days. I bought a house that needed a ton of renovation work and not only did they come out quickly to give me a quote but they sat down with me and discussed many other options that ended up saving me quite a bit of money! Throughout the entire process they communicated with me in a timely manner which is very important to me. They are truly professionals. I have had them complete 7 projects for me and each time I have been more than satisfied. I will definitely continue to use them going forward and have already recommended them to 4 other friends.",
  },
  {
    name: "Sophia Stalker",
    text: "Rheo built us a new fence in our backyard that is amazing. He is professional, approachable, and enjoyable to work with. We didn't like the premade fence from Home Depot so he built us a beautiful custom gate from scratch. Our whole family, pets included, love our new fence! Even the neighbors are all raving about it :)",
  },
  {
    name: "Arianne Newton",
    text: "Seriously, this is the best contractor we've come across in our 40+ years in our hundred year old home here in Portland. We are beyond pleased with Rheo and his team. Fair quote, communication is always courteous and never delayed. But the best part is they truly listen to their clients needs and find creative ways to problem solve and improve the property. We've had them do everything from small drywall jobs, to beautiful walnut hardwood floor installation, to rebuilding porch roofs and complete basement structure and waterproofing. We truly think you should hire him!",
  },
  {
    name: "Trevin Winters",
    text: "They are knowledgeable, hardworking, and pay extreme attention to detail. They are well rounded and consistently deliver high quality work and treat every task with a professional attitude and work ethic. I highly recommend them for any job- they are a valuable asset and a skilled craftsman.",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

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

    const cards = scrollRef.current?.querySelectorAll(".testimonial-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] font-[family-name:var(--font-heading)] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-[#B3530D] text-[#B3530D]"
              />
            ))}
          </div>
          <p className="text-[#2D2D2D]/70 text-lg">
            5.0 stars on Google — 4 reviews
          </p>
        </div>

        {/* Navigation arrows (desktop) */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white shadow-md rounded-full hover:bg-[#F0EBE3] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white shadow-md rounded-full hover:bg-[#F0EBE3] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="testimonial-card opacity-0 min-w-[320px] sm:min-w-[380px] lg:min-w-[400px] flex-shrink-0 snap-start bg-white rounded-sm p-8 shadow-sm border border-[#E5E0D8]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#B3530D] text-[#B3530D]"
                    />
                  ))}
                </div>
                <p className="text-[#2D2D2D]/80 text-sm leading-relaxed mb-6 line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B3530D]/10 flex items-center justify-center">
                    <span className="text-[#B3530D] font-semibold text-sm">
                      {review.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium text-[#2D2D2D] text-sm">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
