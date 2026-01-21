// src/app/page.tsx
import { HeroSection } from "@/src/components/arena/HeroSection";
import { ProblemSection } from "@/src/components/arena/ProblemSection";
import { TerminalSection } from "@/src/components/arena/TerminalSection";
import { TokenomicsSection } from "@/src/components/arena/TokenomicsSection";
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <ProblemSection />
      <TerminalSection />
      
      {/* Seção Final Simples (CTA) */}
      <section className="py-24 text-center bg-orange-600">
        <h2 className="text-4xl md:text-7xl font-black text-black mb-8">
            ACCESS THE ARENA.
        </h2>
        <button className="bg-black text-white px-12 py-6 text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
            BUY $ARENA
        </button>
      </section>
    </main>
  );
}