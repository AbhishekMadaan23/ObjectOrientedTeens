import BlogSection from "@/components/Homepage/BlogSection";
import Footer from "@/components/Homepage/Footer";
import HeroSection from "@/components/Homepage/HeroSection";
import MemeSection from "@/components/Homepage/MemeSection";
import MerchSection from "@/components/Homepage/MerchSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <MemeSection />
      <BlogSection />
      <MerchSection />
      <Footer />
    </div>
  );
}
