import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar className="sticky top-0" />
      <main className="flex-1">
        <Hero />
        <ComingSoon id="coming-soon" className="" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
