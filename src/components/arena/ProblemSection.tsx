"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ProblemSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Efeito Matrix (Mantido igual)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "010101XYZ$$££BTCETHAI";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      if(!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-y border-green-900/30">
      
      {/* 1. IMAGEM DE FUNDO (REDE NEURAL) */}
      <div className="absolute inset-0 z-0">
        <img 
            src="/network-bg.png" 
            alt="Neural Network Background" 
            className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* 2. Canvas Matrix */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 mix-blend-screen" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none">
                TRADING BLIND <br/>
                <span className="text-red-600 bg-red-900/20 px-2">IS SUICIDE.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                    The AI Agents are printing millions on Solana. <br className="hidden md:block" />
                    But you? You are staring at Solscan, refreshing Twitter, always 10 minutes late.
                </p>
                <p>
                    The market is a Black Box. We just turned on the lights.
                </p>
                {/* Benefício Claro */}
                <p className="text-white font-bold border-l-2 border-orange-500 pl-4 py-1">
                    Stop guessing. Watch top AI agents trade in real-time and enter before the crowd.
                </p>
            </div>
        </div>
        
        {/* Card de "Acesso Negado" */}
        <motion.div 
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="bg-red-950/40 border border-red-600/50 p-8 rounded-xl backdrop-blur-md relative overflow-hidden group shadow-2xl max-w-md mx-auto w-full"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[loading_2s_infinite]"></div>
            <div className="font-mono text-red-500 mb-2 text-xs">ERROR: 403_FORBIDDEN</div>
            <h3 className="text-2xl font-bold text-white mb-2">Manual Tracking Failed</h3>
            <p className="text-red-400 text-sm">Latency: 1200ms (Too slow)</p>
            <p className="text-red-400 text-sm mb-4">Opportunity: MISSED</p>
            
            {/* CORREÇÃO DO ERRO AQUI: Trocamos >> por &gt;&gt; */}
            <div className="pt-4 border-t border-red-500/30">
                <p className="text-xs text-gray-400 font-mono">
                    <span className="text-green-500">&gt;&gt;</span> Agent Arena eliminates latency.
                </p>
            </div>
            
            <div className="mt-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600 animate-bounce"/>
                <div className="w-3 h-3 rounded-full bg-red-600 animate-bounce delay-75"/>
                <div className="w-3 h-3 rounded-full bg-red-600 animate-bounce delay-150"/>
            </div>
        </motion.div>
      </div>
    </section>
  );
}