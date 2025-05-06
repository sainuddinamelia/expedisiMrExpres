import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { useImages } from "@/lib/images";

const GallerySection = () => {
  const { galeriImages } = useImages();

  const galleryItems = [
    {
      title: "Kantor Operasional",
      description: "Layanan pemasaran dan pelanggan"
    },
    {
      title: "Kontainer Logistik",
      description: "Kontainer pengiriman PELNI"
    },
    {
      title: "Proses Distribusi",
      description: "Penyaluran barang antar pulau"
    },
    {
      title: "Armada Pengiriman",
      description: "Kendaraan transportasi barang"
    },
    {
      title: "Dermaga Pelabuhan",
      description: "Aktivitas di pelabuhan"
    },
    {
      title: "Terminal Barang",
      description: "Pergudangan dan penyimpanan"
    },
    {
      title: "Kapal PELNI",
      description: "Transportasi pengiriman laut"
    },
    {
      title: "Penanganan Kargo",
      description: "Proses bongkar muat barang"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galeriImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image} 
                alt={index < galleryItems.length 
                  ? galleryItems[index].title 
                  : `Galeri Operasional ${index + 1}`} 
                className="w-full h-60 object-cover gallery-image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-semibold">
                    {index < galleryItems.length 
                      ? galleryItems[index].title 
                      : `Galeri Operasional ${index + 1}`}
                  </h3>
                  <p className="text-sm">
                    {index < galleryItems.length 
                      ? galleryItems[index].description 
                      : "Dokumentasi aktivitas operasional"}
                  </p>
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
