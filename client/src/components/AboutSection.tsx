import { useImages } from "@/lib/images";
import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";

const AboutSection = () => {
  const { galeriImages } = useImages();

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Tentang CV MR Express"
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Ekspedisi Profesional yang Terpercaya
            </h3>
            <p className="text-gray-600 mb-4">
              CV MR Express adalah mitra resmi dan agen PELNI Surabaya yang berpengalaman dalam melayani pengiriman 
              barang via kapal cepat PELNI. Kami berkomitmen untuk memberikan layanan ekspedisi yang terjangkau, 
              aman, dan tepat waktu.
            </p>
            
            <p className="text-gray-600 mb-6">
              Sebagai agen PELNI, kami mengutamakan kepuasan pelanggan dengan menawarkan layanan lengkap mulai dari pickup, 
              pengemasan, hingga pengiriman ke berbagai daerah di Indonesia Timur.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Terpercaya</h4>
                  <p className="text-sm text-gray-600">Jaminan keamanan barang</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tepat Waktu</h4>
                  <p className="text-sm text-gray-600">Pengiriman sesuai jadwal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ekonomis</h4>
                  <p className="text-sm text-gray-600">Harga bersaing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  <i className="fas fa-headset"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Responsif</h4>
                  <p className="text-sm text-gray-600">Layanan pelanggan 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* First shipping container image */}
            <div className="rounded-lg overflow-hidden shadow-lg h-48">
              <img 
                src={galeriImages[0]} 
                alt="Container shipping service" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Warehouse operations with packages */}
            <div className="rounded-lg overflow-hidden shadow-lg row-span-2 h-full">
              <img 
                src={galeriImages[1]} 
                alt="Warehouse operations" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Port with cargo containers */}
            <div className="rounded-lg overflow-hidden shadow-lg h-48">
              <img 
                src={galeriImages[2]} 
                alt="Port operations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
