import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Topics from "@/components/Topics";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <Features />
        <Topics />
      </main>
    </div>

  );
}
