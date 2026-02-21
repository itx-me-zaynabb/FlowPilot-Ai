import CTA from "./sections/CTA";
import CursorGlow from "./sections/CursorGlow";
import FAQ from "./sections/FAQ";
import Features from "./sections/features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import ScrollProgress from "./sections/ScrollProgress";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main className="bg-[#0B0F19] text-white font-sans">
      <ScrollProgress />
      <Navbar />
      <CursorGlow />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Integrations />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
