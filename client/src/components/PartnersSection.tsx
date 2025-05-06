import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { PELNILogo } from "./icons";
import { useImages } from "@/lib/images";

const PartnersSection = () => {
  const { mitraImages } = useImages();

  return (
    <section id="partners" className="py-16 bg-white">
      <Container>
        <SectionHeading
          title="Mitra Bisnis Kami"
          description="Kami bekerja sama dengan mitra terpercaya untuk memberikan layanan ekspedisi terbaik."
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-gray-50 p-8 rounded-xl flex justify-center items-center">
              <PELNILogo className="h-20 w-auto" />
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">PELNI Logistics</h3>
              <p className="text-gray-600 mb-4">
                Sebagai agen resmi PELNI Logistics di Surabaya, kami menawarkan solusi pengiriman 
                terpadu dan terpercaya dengan memanfaatkan jaringan luas PELNI ke seluruh Indonesia.
              </p>
              
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">Jadwal pengiriman terjadwal dan teratur</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">Jangkauan luas ke seluruh Indonesia Timur</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">Infrastruktur dan armada yang handal</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">Sistem pelacakan pengiriman terintegrasi</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Container ship image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={mitraImages[0]} 
                alt="PELNI container ship" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* PELNI logistics warehouse */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={mitraImages[1]} 
                alt="Logistics warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Shipping containers stacked */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={mitraImages[0]} 
                alt="Shipping containers" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Port operations */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={mitraImages[1]} 
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

export default PartnersSection;
