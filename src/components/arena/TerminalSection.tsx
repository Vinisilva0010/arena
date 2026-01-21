"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Eye } from "lucide-react";

export function TerminalSection() {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_20px_#ff4500]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">THE GOD MODE</h2>
            <p className="text-orange-500 font-mono">Built in Rust. Zero Latency. Pure Alpha.</p>
        </div>

        {/* O Terminal Interface */}
        <motion.div 
            initial={{ rotateX: 20, opacity: 0, y: 100 }}
            whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: "1000px" }}
            className="w-full"
        >
            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_100px_rgba(255,69,0,0.15)] ring-1 ring-white/10">
                {/* Header do App (Mantido) */}
                <div className="bg-[#111] p-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"/>
                    </div>
                    <div className="font-mono text-[10px] md:text-xs text-gray-500 flex-1 text-center truncate px-2">
                        agent_arena_terminal_v1.0 (Connected: Helius RPC)
                    </div>
                    <div className="text-green-500 text-[10px] md:text-xs font-bold animate-pulse whitespace-nowrap">● LIVE</div>
                </div>

                {/* Conteúdo Grid */}
                <div className="grid lg:grid-cols-12 min-h-[500px]">
                    
                    {/* Sidebar - LEADERBOARD */}
                    <div className="lg:col-span-3 border-r border-white/10 p-4 bg-[#080808]">
                        <div className="flex justify-between items-end mb-4">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Top Agents (24h)</div>
                            {/* NOVO: Disclaimer sutil */}
                            <div className="text-[9px] text-gray-700 uppercase font-mono">(Simulated Data)</div>
                        </div>
                        
                        {[
                            {n: "ai16z.eth", v: "+1,204%", c: "text-green-400"},
                            {n: "eliza_bot", v: "+892%", c: "text-green-500"},
                            {n: "zerebro", v: "-12%", c: "text-red-500"},
                            {n: "chaos_gpt", v: "+440%", c: "text-green-400"},
                        ].map((a, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/5 cursor-pointer px-2 rounded transition-colors group">
                                <span className="font-bold text-white text-xs md:text-sm group-hover:text-orange-500 transition-colors">{a.n}</span>
                                <span className={`font-mono text-xs ${a.c}`}>{a.v}</span>
                            </div>
                        ))}
                    </div>

                    {/* Main Feed - LOGS */}
                    <div className="lg:col-span-9 bg-[#030303] p-4 md:p-6 relative font-mono text-xs md:text-sm">
                        {/* Scanlines Effect (Mantido) */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        
                        <div className="space-y-4 relative z-0">
                            {/* NOVO: Label do Feed */}
                            <div className="text-[10px] text-gray-600 font-bold border-b border-gray-800 pb-2 mb-4">
                                // LIVE AGENT FEED (PREVIEW MODE)
                            </div>

                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-green-500 opacity-70">
                                <span className="shrink-0">[10:42:01]</span>
                                <span>Scanning mempool for agent wallets...</span>
                            </div>
                            
                            {/* Logs com quebra de linha segura para mobile */}
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white bg-green-900/20 p-2 rounded border border-green-500/30 break-all md:break-normal">
                                <span className="text-green-400 font-bold shrink-0">[SNIPE DETECTED]</span>
                                <span>eliza.sol bought <span className="text-yellow-400 font-bold">$TRUMP</span></span>
                                <span className="text-gray-400 md:ml-auto text-xs shrink-0">Value: 50 SOL</span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white bg-green-900/10 p-2 rounded border border-green-500/10 break-all md:break-normal">
                                <span className="text-green-600 font-bold shrink-0">[SNIPE DETECTED]</span>
                                <span>truth_terminal bought <span className="text-yellow-400 font-bold">$FART</span></span>
                                <span className="text-gray-400 md:ml-auto text-xs shrink-0">Value: 12 SOL</span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white bg-red-900/10 p-2 rounded border border-red-500/10 break-all md:break-normal">
                                <span className="text-red-500 font-bold shrink-0">[DUMP DETECTED]</span>
                                <span>zerebro sold <span className="text-red-400 font-bold">$SCAM</span></span>
                                <span className="text-gray-400 md:ml-auto text-xs shrink-0">Value: 100%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>

        {/* Tech Specs */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
                {icon: Cpu, t: "Rust Engine", d: "50ms latency vs 1.2s Python"},
                {icon: Zap, t: "Direct RPC", d: "Connected to Helius Atlas"},
                {icon: Eye, t: "Visual Intelligence", d: "No more spreadsheets"},
            ].map((item, i) => (
                <div key={i} className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-orange-500/50 transition-colors group">
                    <item.icon className="text-gray-500 group-hover:text-orange-500 mb-4 transition-colors" size={32}/>
                    <h3 className="text-white font-bold text-lg">{item.t}</h3>
                    <p className="text-gray-400 text-sm mt-2">{item.d}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}