import Features from "./sections/features";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
