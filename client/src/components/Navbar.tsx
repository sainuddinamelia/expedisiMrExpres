import { useState, useEffect } from "react";
import { Link } from "wouter";
import Container from "./ui/container";
import { MRExpressLogo } from "./icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 navbar-transition ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-md md:bg-transparent md:shadow-none"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Link href="/#hero" onClick={closeMobileMenu}>
              <MRExpressLogo className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/#hero" className="font-medium text-gray-700 hover:text-secondary transition">
              Beranda
            </Link>
            <Link href="/#about" className="font-medium text-gray-700 hover:text-secondary transition">
              Tentang Kami
            </Link>
            <Link href="/#services" className="font-medium text-gray-700 hover:text-secondary transition">
              Layanan
            </Link>
            <Link href="/#routes" className="font-medium text-gray-700 hover:text-secondary transition">
              Rute
            </Link>
            <Link href="/#gallery" className="font-medium text-gray-700 hover:text-secondary transition">
              Galeri
            </Link>
            <Link href="/#contact" className="font-medium text-gray-700 hover:text-secondary transition">
              Kontak
            </Link>
          </nav>

          {/* WhatsApp Button (Desktop) */}
          <a
            href="https://wa.me/6282336829960?text=Get"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition"
          >
            <i className="fab fa-whatsapp mr-2 text-lg"></i>
            <span>Chat WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link href="/#hero" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Beranda
              </Link>
              <Link href="/#about" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Tentang Kami
              </Link>
              <Link href="/#services" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Layanan
              </Link>
              <Link href="/#routes" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Rute
              </Link>
              <Link href="/#gallery" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Galeri
              </Link>
              <Link href="/#contact" className="font-medium text-gray-700 hover:text-secondary transition py-2" onClick={closeMobileMenu}>
                Kontak
              </Link>

              {/* WhatsApp Button (Mobile) */}
              <a
                href="https://wa.me/6282336829960?text=Get"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg text-white font-medium transition justify-center mt-2"
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
