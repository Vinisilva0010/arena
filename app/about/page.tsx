"use client";
import { motion } from "framer-motion";
import { Shield, Cpu, Code2, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20 selection:bg-orange-500 selection:text-black font-sans">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* HEADER DA PÁGINA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
            <div className="flex items-center gap-2 text-orange-500 font-mono text-xs font-bold tracking-widest mb-4">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"/>
                MISSION BRIEFING // CLASSIFIED
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
                We are the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Watchers.</span>
            </h1>
        </motion.div>

        {/* MANIFESTO */}
        <section className="prose prose-invert prose-lg max-w-none mb-20">
            <p className="text-2xl text-gray-400 leading-relaxed font-light">
                The Solana blockchain has become a battlefield for AI Agents. 
                Eliza, Zerebro, ai16z... they are not just memes. They are autonomous economic actors.
            </p>
            <p className="text-gray-400">
                While retail traders rely on intuition and delayed data, these machines operate on pure logic and millisecond execution. 
                <strong className="text-white"> Humans are losing.</strong>
            </p>
            <p className="text-gray-400">
                Agent Arena was built to level the playing field. We constructed a surveillance system that sits directly on top of the Solana RPC layer, decoding agent transactions the moment they enter the mempool.
            </p>
        </section>

        {/* TECH STACK GRID */}
        <section className="grid md:grid-cols-2 gap-6 mb-24">
            <div className="col-span-2 text-2xl font-black mb-4 flex items-center gap-2">
                <Code2 className="text-orange-500"/> THE ARSENAL
            </div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-[#111] p-8 border border-white/10 rounded-xl group">
                <Cpu size={32} className="text-orange-500 mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-2">Rust Native Core</h3>
                <p className="text-gray-400 text-sm">
                    No Garbage Collection. No runtime overhead. We wrote our indexer in Rust to match the speed of Solana itself.
                </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111] p-8 border border-white/10 rounded-xl group">
                <Shield size={32} className="text-green-500 mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-2">Institutional Grade Security</h3>
                <p className="text-gray-400 text-sm">
                    Our data pipeline is encrypted and redundant. We don't just scrape; we verify every block signature.
                </p>
            </motion.div>
        </section>

        {/* ROADMAP TIMELINE */}
        <section className="relative border-l border-white/10 pl-8 space-y-12">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-orange-500 rounded-full" />
            
            <div>
                <h4 className="text-xs font-mono text-orange-500 mb-2">PHASE 1: THE AWAKENING (CURRENT)</h4>
                <h3 className="text-2xl font-bold mb-2">Hackathon Launch</h3>
                <p className="text-gray-400 text-sm max-w-md">
                    Deployment of the MVP for the Pump.fun Hackathon. Core indexing engine operational. $ARENA token deployed on devnet.
                </p>
            </div>

            <div className="opacity-50">
                <div className="absolute -left-1.5 top-32 w-3 h-3 bg-gray-700 rounded-full" />
                <h4 className="text-xs font-mono text-gray-500 mb-2">PHASE 2: THE EXPANSION</h4>
                <h3 className="text-2xl font-bold mb-2">Public Beta & Sniper Tools</h3>
                <p className="text-gray-500 text-sm max-w-md">
                    Opening access to $ARENA holders. Release of "One-Click Copy Trade" feature to mirror agent wallets instantly.
                </p>
            </div>

            <div className="opacity-30">
                <div className="absolute -left-1.5 top-64 w-3 h-3 bg-gray-800 rounded-full" />
                <h4 className="text-xs font-mono text-gray-600 mb-2">PHASE 3: TOTAL DOMINANCE</h4>
                <h3 className="text-2xl font-bold mb-2">Agent Creation Studio</h3>
                <p className="text-gray-600 text-sm max-w-md">
                    Allowing users to deploy their own monitoring agents using our infrastructure.
                </p>
            </div>
        </section>

        {/* FOOTER DA PÁGINA */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center">
            <button className="bg-white text-black px-8 py-4 font-black rounded hover:bg-orange-500 hover:text-white transition-colors">
                READ WHITE PAPER
            </button>
        </div>

      </div>
    </main>
  );
}