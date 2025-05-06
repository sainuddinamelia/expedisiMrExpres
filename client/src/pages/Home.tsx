import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RoutesSection from "@/components/RoutesSection";
import PartnersSection from "@/components/PartnersSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "CV MR Express - Ekspedisi Muatan Kapal Laut & Darat | Agen PELNI Surabaya";
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RoutesSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};

export default Home;
