import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import PartnerScroll from "@/components/PartnerScroll";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <FeaturesCarousel />
      <PartnerScroll />
      <ContactUs />
      <Footer />
    </div>
  );
}
