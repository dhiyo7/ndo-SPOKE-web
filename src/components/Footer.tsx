import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pitch">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-l border-pitch">
        
        {/* Nav Links */}
        <div className="p-8 border-r border-pitch flex flex-col gap-2 text-[10px] font-black uppercase tracking-widest">
           <a href="#features" className="hover:text-accent transition-colors">Fitur Unggulan</a>
           <a href="#guide" className="hover:text-accent transition-colors">Panduan Instalasi</a>
           <a href="#download" className="hover:text-accent transition-colors">Download App</a>
           <a href="#report" className="hover:text-accent transition-colors">Laporkan Issue</a>
        </div>

        {/* Contact info */}
        <div className="p-8 border-r border-pitch flex flex-col justify-center gap-2 text-[10px] font-black uppercase tracking-widest">
           {/* <a href="mailto:hello@ndo-spoke.app" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <Mail className="w-3 h-3" />
              hello@ndo-spoke.app
           </a>
           <a href="tel:+628001234567" className="opacity-60 hover:opacity-100 transition-opacity">
              +62 (800) 123-4567
           </a> */}
        </div>

        {/* Socials */}
        <div className="p-8 border-r border-pitch flex items-center justify-center gap-6">
           <a href="https://github.com/dhiyo7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4 hover:text-accent cursor-pointer" />
           </a>
        </div>

        {/* Branding */}
        <div className="p-8 border-r border-pitch bg-pitch text-white flex items-center justify-center">
           <span className="font-extrabold italic uppercase tracking-tighter text-sm">ndo-SPOKE v1.0.0</span>
        </div>
      </div>
      
      {/* Absolute Bottom */}
      <div className="border-t border-pitch py-4 text-center text-[9px] font-bold uppercase tracking-[0.4em] opacity-30">
         Kebijakan Privasi dan Syarat Ketentuan Layanan © 2026
      </div>
    </footer>
  );
}
