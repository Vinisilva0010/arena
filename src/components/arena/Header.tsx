"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Terminal, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detecta o scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TERMINAL", href: "/" },
    { name: "MISSION", href: "/about" }, // Link para a página Sobre
    { name: "DOCS", href: "#" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-white/10 py-3" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-orange-500/10 p-2 rounded border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-colors text-orange-500">
            <Terminal size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-white">
            AGENT <span className="text-orange-500">ARENA</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors tracking-widest relative group"
            >
              <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & STATUS */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-[10px] font-mono text-green-400">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            SYSTEM: ONLINE
          </div>
          <button className="bg-white text-black px-5 py-2 text-xs font-black hover:bg-orange-500 transition-colors skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">LAUNCH APP</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono font-bold text-gray-300 hover:text-orange-500 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-orange-600 text-white py-3 font-bold mt-2">
              LAUNCH APP
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}