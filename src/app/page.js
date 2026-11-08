import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsTickerSection from "@/components/sections/StatsTickerSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Features & Building Blocks Section (AI where your team works + See what Notion can do) */}
      <FeaturesSection />

      {/* 3. Trusted by teams that ship Section (Backend API GET /api/testimonials) */}
      <TestimonialsSection />

      {/* 4. Stats Ticker Section (Looping Marquee dengan Fade & Pause on Hover) */}
      <StatsTickerSection />

      {/* 5. Final CTA Section with Newsletter Subscription (POST /api/newsletter) */}
      <CTASection />
    </div>
  );
}
