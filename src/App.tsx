import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-white">
        <Navbar />
        <HeroSection />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
