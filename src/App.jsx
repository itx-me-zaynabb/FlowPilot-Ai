import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Features from "./sections/features";
import Footer from "./sections/Footer";
import Integrations from "./sections/Integrations";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import ScrollProgress from "./sections/ScrollProgress";
import Testimonials from "./sections/Testimonials";
import Hero from "./sections/Hero";
import SplashCursor from "./component/SplashCursor";
import Team from "./sections/Team";
import Newsletter from "./sections/Newsletter";

export default function App() {
  return (
    <main className="bg-[#0B0F19] text-white font-sans">
      <ScrollProgress />
      <Navbar />
      <SplashCursor />
      <Hero />
      <Features />
      <Pricing />
      <Team />
      <Testimonials />
      <Integrations />
      <CTA />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
