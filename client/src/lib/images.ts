export const useImages = () => {
  // Reference images from the mrexpresgmbar folder
  const logoImage = "/mrexpresgmbar/logo.jpg";
  const utamaImage = "/mrexpresgmbar/utama.jpg";
  
  const galeriImages = [
    "/mrexpresgmbar/galeri1.jpg",
    "/mrexpresgmbar/galeri2.jpg",
    "/mrexpresgmbar/galeri3.jpg",
    "/mrexpresgmbar/galeri4.jpg",
    "/mrexpresgmbar/galeri5.jpg",
    "/mrexpresgmbar/galeri6.jpg",
    "/mrexpresgmbar/galeri7.jpg",
    "/mrexpresgmbar/galeri8.jpg",
  ];
  
  const mitraImages = [
    "/mrexpresgmbar/mitra.jpg",
    "/mrexpresgmbar/mitra1.jpg",
  ];
  
  return {
    logoImage,
    utamaImage,
    galeriImages,
    mitraImages
  };
};
