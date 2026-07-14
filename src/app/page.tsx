import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import ServiceAreas from "@/components/ServiceAreas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <AboutSection />
        <ServicesGrid />
        <TestimonialSection />
        <CTASection />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
