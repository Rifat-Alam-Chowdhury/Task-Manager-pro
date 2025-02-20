import Hero from "../Hero/Hero";
import Features from "../Features";
import Pricing from "../Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero  */}
      <Hero />

      {/* Features  */}
      <Features />

      {/* Pricing Section */}
      <Pricing />
    </div>
  );
}
