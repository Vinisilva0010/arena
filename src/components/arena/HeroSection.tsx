"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Efeito de digitação
  const [text, setText] = useState("");
  const fullText = "TRACK. COPY. HUNT.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Imagem de Fundo (Agente) com Parallax */}
      <motion.div 
        style={{ y: y1, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"/>
        <img 
            src="/hero-agent.png" 
            alt="AI Agent" 
            className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Conteúdo Central */}
      <div className="relative z-20 text-center px-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4"
        >
            <span className="bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-1 rounded-full text-xs font-mono font-bold tracking-[0.3em] backdrop-blur-md">
                SYSTEM_ONLINE_V2.0
            </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-2 mix-blend-overlay">
          AGENT <span className="text-orange-600">ARENA</span>
        </h1>
        
        <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl font-mono text-green-400">
                {text}<span className="animate-pulse">_</span>
            </p>
        </div>

        <motion.div 
            style={{ y: y2 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
            <button className="group relative px-8 py-4 bg-white text-black font-black text-lg skew-x-[-10deg] hover:bg-orange-500 transition-colors">
                <div className="skew-x-[10deg] flex items-center gap-2">
                    LAUNCH APP 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </button>
            <div className="text-gray-500 text-xs font-mono">
                CA: <span className="text-gray-300 select-all cursor-pointer hover:text-orange-500 transition-colors">8xQz...9Lp2</span> (Click to Copy)
            </div>
        </motion.div>
      </div>

      {/* Grid no Chão */}
      <div className="absolute bottom-0 w-full h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#ff4500_100%)] opacity-10 [transform:perspective(500px)_rotateX(60deg)] pointer-events-none" />
    </section>
  );
}