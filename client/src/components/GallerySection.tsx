import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { useImages } from "@/lib/images";

const GallerySection = () => {
  const { galeriImages } = useImages();

  const galleryItems = [
    {
      title: "Operasi Pengiriman",
      description: "Pengiriman barang melalui kontainer"
    },
    {
      title: "Kontainer PELNI",
      description: "Pengiriman via Kontainer PELNI"
    },
    {
      title: "Pengemasan Barang",
      description: "Proses persiapan pengiriman"
    },
    {
      title: "Pemuatan Barang",
      description: "Proses pemuatan ke kontainer"
    },
    {
      title: "Operasi Pelabuhan",
      description: "Aktivitas pengiriman di pelabuhan"
    },
    {
      title: "Kantor Operasional",
      description: "Pelayanan pelanggan"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Galeri Operasional"
          description="Dokumentasi aktivitas pengiriman dan operasional CV MR Express sebagai agen PELNI Surabaya."
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galeriImages.slice(0, 6).map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image} 
                alt={galleryItems[index].title} 
                className="w-full h-60 object-cover gallery-image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-semibold">{galleryItems[index].title}</h3>
                  <p className="text-sm">{galleryItems[index].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
