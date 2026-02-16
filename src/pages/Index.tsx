import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import SituationsSection from "@/components/SituationsSection";
import SecondFormSection from "@/components/SecondFormSection";
import CompareSection from "@/components/CompareSection";
import HousesBoughtSection from "@/components/HousesBoughtSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComplianceSection from "@/components/ComplianceSection";
import FAQSection from "@/components/FAQSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SituationsSection />
        <SecondFormSection />
        <CompareSection />
        <HousesBoughtSection />
        <TestimonialsSection />
        <ComplianceSection />
        <FAQSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
