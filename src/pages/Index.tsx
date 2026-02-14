import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import SecondFormSection from "@/components/SecondFormSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <SecondFormSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
