import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Topics from "@/components/Topics";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <Features />
        <Topics />
        <QuoteSection />
        <Footer />
      </main>
    </div>

  );
}
