import { ContactSection } from "@/components/home/ContactSection";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyWorkWithMeSection } from "@/components/home/WhyWorkWithMeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <WhyWorkWithMeSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
