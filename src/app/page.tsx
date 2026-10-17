import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import TechShowcase from "@/components/TechShowcase";
import EditorialGallery from "@/components/EditorialGallery";
import TestimonialSection from "@/components/TestimonialSection";
import BookingInquiry from "@/components/BookingInquiry";
import LocationSchedule from "@/components/LocationSchedule";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090A] text-slate-100 flex flex-col overflow-x-hidden selection:bg-[#CEFF00] selection:text-black">
      {/* Dynamic Navbar */}
      <Navbar />

      {/* Hero Full Bleed 100vh */}
      <HeroSection />

      {/* Zenith 4-Column Technical Stats Bar */}
      <StatsBar />

      {/* Services Catalogue (3 Tiers with dynamic vehicle selector) */}
      <ServicesSection />

      {/* Tech & Chemistry Showcase (Zenith Battery style) */}
      <TechShowcase />

      {/* Editorial Bento Grid Gallery with Real Photography */}
      <EditorialGallery />

      {/* Verified Google Review Testimonial */}
      <TestimonialSection />

      {/* Interactive Booking Inquiry */}
      <BookingInquiry />

      {/* Location, GPS route and Schedule */}
      <LocationSchedule />

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />
    </main>
  );
}
