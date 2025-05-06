import Container from "./ui/container";
import { Link } from "wouter";
import { MRExpressLogo } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <MRExpressLogo className="h-16 mb-4" isWhite />
            
            <p className="text-gray-400 mb-4">
              Agen PELNI Surabaya yang melayani pengiriman barang via kapal cepat PELNI ke berbagai daerah di Indonesia Timur.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/cvmrexpress/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/mad.mandor.31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@cvmrexpress7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Pengiriman Via Kapal Cepat</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Pengiriman Kargo & Kontainer</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Layanan Door-to-Door</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Pengemasan & Penyimpanan</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Dokumentasi & Asuransi</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition">Konsultasi Logistik</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-400">Gedung Puskopal 2 Jl. Ikan Dorang No.1 Lantai 2 No. 4, Surabaya</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-warehouse mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-400">Depo PELNI Logistics Jl. Kalianak Barat No.68 B, Surabaya</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-secondary"></i>
                <a href="mailto:cvmrexpress@gmail.com" className="text-gray-400 hover:text-white">cvmrexpress@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-secondary"></i>
                <a 
                  href="https://wa.me/6282336829960" 
                  className="text-gray-400 hover:text-white" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +62 823-3682-9960
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} CV MR Express. Semua Hak Dilindungi.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
