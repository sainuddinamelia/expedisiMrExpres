import { Link } from "wouter";
import Container from "./ui/container";
import { PELNILogo } from "./icons";
import { useImages } from "@/lib/images";

const HeroSection = () => {
  const { utamaImage } = useImages();

  return (
    <section id="hero" className="relative pt-24 lg:pt-0 lg:h-screen flex items-center hero-pattern overflow-hidden">
      <Container className="py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Ekspedisi Terpercaya untuk Pengiriman Anda
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Agen PELNI Surabaya yang melayani pengiriman barang via kapal cepat PELNI dengan jaminan pelayanan terbaik.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#routes">
                <a className="bg-accent hover:bg-accent-dark text-gray-900 font-bold py-3 px-6 rounded-lg transition shadow-lg">
                  Lihat Rute
                </a>
              </Link>
              <Link href="#contact">
                <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition shadow-lg">
                  Hubungi Kami
                </a>
              </Link>
            </div>

            <div className="mt-8 inline-flex items-center py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-white font-medium">MURAH - AMAN - AMANAH - CEPAT DAN TEPAT WAKTU</span>
            </div>
          </div>

          <div className="relative">
            {/* Hero promotional image in a circular frame */}
            <div className="relative rounded-full border-4 border-white/30 w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto overflow-hidden shadow-2xl animate-fade-in">
              <img
                src={utamaImage}
                alt="Pengiriman container PELNI"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Company association badge */}
            <div className="absolute -bottom-5 -right-5 md:bottom-10 md:right-10 bg-white rounded-full p-3 shadow-xl">
              <div className="bg-primary rounded-full p-2">
                <PELNILogo className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center hidden lg:block">
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
          <span className="text-sm font-medium">Scroll untuk melihat</span>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
