export const useImages = () => {
  // Reference images from the attached_assets folder
  const logoImage = "/attached_assets/logo.jpg";
  const utamaImage = "/attached_assets/utama.jpg";
  
  const galeriImages = [
    "/attached_assets/galeri6.jpg",
    "/attached_assets/galeri7.jpg",
    "/attached_assets/galeri8.jpg",
    // For missing galeri images, we'll reuse the ones we have
    "/attached_assets/galeri6.jpg",
    "/attached_assets/galeri7.jpg",
    "/attached_assets/galeri8.jpg",
  ];
  
  const mitraImages = [
    "/attached_assets/mitra.jpg",
    "/attached_assets/mitra1.jpg",
  ];
  
  return {
    logoImage,
    utamaImage,
    galeriImages,
    mitraImages
  };
};
