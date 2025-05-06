import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { routes } from "@/data/routes";
import { Link } from "wouter";

const RoutesSection = () => {
  return (
    <section id="routes" className="py-20 bg-gradient-blue text-white">
      <Container>
        <SectionHeading
          title="Rute Pengiriman Kami"
          description="Kami melayani pengiriman ke berbagai daerah di Indonesia Timur dengan waktu tempuh yang efisien melalui kapal cepat PELNI."
          className="mb-12"
          isLight
        />
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-5 hover:bg-white/10 transition ${
                  route.destination === "JAYAPURA" ? "md:col-span-1 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">SBY &gt; {route.destination}</h3>
                    <p className="text-white/70 text-sm">Via Kapal Cepat PELNI</p>
                  </div>
                  <div className="bg-secondary text-white py-1 px-3 rounded-full text-sm font-bold">
                    {route.duration} HARI
                  </div>
                </div>
                <div className="flex items-center text-white/80">
                  <i className="fas fa-calendar-check mr-2"></i>
                  <span>Keberangkatan Mingguan</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">*Waktu tempuh dapat berubah sesuai dengan kondisi cuaca dan jadwal kapal</p>
            <Link href="#contact">
              <a className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition">
                Tanya Jadwal Terbaru
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoutesSection;
