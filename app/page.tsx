import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TransformationsSection from "@/components/TransformationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsPricingSection from "@/components/ProgramsPricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Leo Coach | Fitness & Lifestyle Coaching",
    description: "Personalized fitness coaching, transformation programs, and success stories with Leo.",
    icons: {
        icon: "/atlasfit-logo.svg",
    },
    openGraph: {
        title: "Leo Coach | Fitness & Lifestyle Coaching",
        description: "Start your transformation journey with Leo – tailored coaching for real results.",
        url: "https://yourdomain.com",
        siteName: "Leo Coach",
        images: [
            {
                url: "/og-image.jpg", // תמונה שתשב בתוך /public
                width: 1200,
                height: 630,
                alt: "Leo Coach Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Leo Coach | Fitness & Lifestyle Coaching",
        description: "Transform your fitness journey with Leo – coaching for strength, health, and confidence.",
        images: ["/og-image.jpg"],
    },
};

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

