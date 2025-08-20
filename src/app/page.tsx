import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import PartnerScroll from "@/components/PartnerScroll";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <FeaturesCarousel />
      <PartnerScroll />
      <ContactUs />
      <Footer />
    </div>
  );
}
