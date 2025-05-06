import { useState } from "react";
import Container from "./ui/container";
import SectionHeading from "./ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Membuat pesan WhatsApp dengan format yang rapi
    const message = `*Pesan dari Website MR EXPRESS*
*Nama:* ${formData.name}
*Email:* ${formData.email}
*Telepon:* ${formData.phone}
*Subjek:* ${formData.subject}
*Pesan:* ${formData.message}`;
    
    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Buka WhatsApp dengan pesan yang sudah disiapkan
    window.open(`https://wa.me/6282336829960?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          title="Hubungi Kami"
          description="Silakan hubungi kami untuk informasi lebih lanjut tentang layanan ekspedisi kami."
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat Kantor</h4>
                    <p className="text-gray-600">Gedung Puskopal 2 Jl. Ikan Dorang No.1 Lantai 2 No. 4, Surabaya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <i className="fas fa-warehouse"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat Depo</h4>
                    <p className="text-gray-600">Depo PELNI Logistics Jl. Kalianak Barat No.68 B, Kalianak, Kec. Asem Rowo, Surabaya, Jawa Timur 60183</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Senin - Sabtu: 09.00 - 17.00 WIB<br />
                      Rabu: 05.00 - 17.00 WIB<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:cvmrexpress@gmail.com" className="text-primary hover:underline">cvmrexpress@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telepon/WhatsApp</h4>
                    <a href="https://wa.me/6282336829960" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      +62 823-3682-9960
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-3">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/cvmrexpress/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:opacity-90 transition"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/mad.mandor.31" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:opacity-90 transition"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@cvmrexpress7" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-black text-white p-3 rounded-full hover:opacity-90 transition"
                    aria-label="TikTok"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <Card className="shadow-lg mb-6 overflow-hidden">
              <div className="h-[350px] w-full bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0614931897384!2d112.7028533!3d-7.2337692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f888ea9e0bcb%3A0x7c31ab9a3c548ede!2sJl.%20Kalianak%20Barat%20No.68B%2C%20Kalianak%2C%20Kec.%20Asemrowo%2C%20Surabaya%2C%20Jawa%20Timur%2060183!5e0!3m2!1sid!2sid!4v1654321986123!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CV MR Express Location"
                ></iframe>
              </div>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Kirim Pesan</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium mb-2">Nama</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                        placeholder="Nama Lengkap"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2">No. Telepon</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                      placeholder="0812xxxxxxxx"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="subject" className="text-gray-700 font-medium mb-2">Subjek</Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                      placeholder="Judul pesan Anda"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2">Pesan</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                      placeholder="Tuliskan pesan Anda"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    <span>Kirim Pesan via WhatsApp</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
