import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-pitch"
    >
      <div className="max-w-7xl mx-auto flex items-stretch h-16">
        {/* Logo */}
        <div className="px-6 flex items-center gap-3 border-r border-pitch group cursor-pointer bg-white">
          <Megaphone className="w-6 h-6 text-pitch -rotate-12 group-hover:rotate-0 transition-transform" />
          <span className="font-extrabold text-lg uppercase tracking-tighter italic">ndo-SPOKE</span>
        </div>

        {/* Links */}
        <div className="flex-1 items-center justify-center gap-12 text-[11px] font-black uppercase tracking-widest hidden md:flex">
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#about" className="hover:text-accent transition-colors">Security</a>
          <a href="#guide" className="hover:text-accent transition-colors">Panduan</a>
          <a href="#report" className="hover:text-accent transition-colors">Laporkan Issue</a>
        </div>

        {/* Right Action */}
        <div className="flex border-l border-pitch">
          <a 
            href="#download" 
            className="px-8 bg-pitch text-white font-black text-[11px] uppercase tracking-widest hover:bg-accent hover:text-pitch transition-colors hidden md:flex items-center justify-center"
          >
            Download App
          </a>
          <button className="px-6 md:hidden flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
