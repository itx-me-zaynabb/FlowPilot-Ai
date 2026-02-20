import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Integrations from "./Integrations";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function App() {
  return (
    <main className="bg-[#0B0F19] text-white font-sans">
      <Hero /> {/* Floating particles + CTA */}
      <Features />
      <Testimonials />
      <Integrations />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
