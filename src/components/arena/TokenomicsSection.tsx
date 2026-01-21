"use client";
import { motion } from "framer-motion";
import { Lock, Zap, TrendingUp } from "lucide-react";

export function TokenomicsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
         {/* Efeito de grade no fundo */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* LADO ESQUERDO: TEXTO */}
            <div className="text-left">
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
                >
                   <Lock size={16} className="text-orange-500" />
                   <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Token Gated Access</span>
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-none">
                    HOLD TO <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">ACCESS</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-8 max-w-lg">
                  $ARENA isn't just a memecoin. It's a utility key.
                  The Real-Time Sniper Feed is gated. You must hold <strong className="text-white">$ARENA</strong> in your wallet to unlock the dashboard.
                </p>

                <div className="grid grid-cols-1 gap-4">
                   <div className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-lg"><Zap size={24} className="text-orange-500"/></div>
                      <div>
                          <h4 className="text-white font-bold">Scarcity Engine</h4>
                          <p className="text-sm text-gray-400">Tokens are locked in users' wallets, removing them from circulation.</p>
                      </div>
                   </div>
                   <div className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-start gap-4">
                      <div className="bg-green-500/20 p-3 rounded-lg"><TrendingUp size={24} className="text-green-500"/></div>
                      <div>
                          <h4 className="text-white font-bold">Buying Pressure</h4>
                          <p className="text-sm text-gray-400">As user base grows, demand for the token spikes naturally.</p>
                      </div>
                   </div>
                </div>
            </div>

            {/* LADO DIREITO: A MOEDA FLUTUANDO (AQUI ESTÁ ELA!) */}
            <div className="relative flex justify-center items-center h-[500px]">
                {/* Brilho laranja atrás da moeda */}
                <div className="absolute w-[300px] h-[300px] bg-orange-600 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                
                <motion.div
                    animate={{ 
                        y: [-20, 20, -20],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="relative z-10"
                >
                    <img 
                        src="/arena-coin.png" 
                        alt="$ARENA Token" 
                        className="w-[400px] md:w-[500px] object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

         </div>
      </section>
  );
}