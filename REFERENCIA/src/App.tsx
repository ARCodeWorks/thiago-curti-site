import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Specialties } from "./components/Specialties";
import { About } from "./components/About";
import { Differentials } from "./components/Differentials";
import { LeadMagnet } from "./components/LeadMagnet";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-main text-text-main">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Specialties />
        <About />
        <Differentials />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}
