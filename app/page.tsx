import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TransformationsSection from "@/components/TransformationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsPricingSection from "@/components/ProgramsPricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <HowItWorksSection/>
        <TransformationsSection/>
        <TestimonialsSection/>
        <ProgramsPricingSection/>
        <FAQSection/>
        <Footer/>
    </div>
  );
}
