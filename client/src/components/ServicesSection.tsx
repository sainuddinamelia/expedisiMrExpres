import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Layanan Ekspedisi Kami"
          description="Kami menyediakan berbagai layanan pengiriman untuk memenuhi kebutuhan logistik Anda dengan jaminan keamanan dan ketepatan waktu."
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-card p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className={`${service.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600">
                {service.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center mb-2 last:mb-0">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
