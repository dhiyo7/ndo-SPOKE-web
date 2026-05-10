import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 bg-white border-b border-pitch">
      <div className="max-w-7xl mx-auto">
        <div className="brutalist-card p-0 overflow-hidden grid lg:grid-cols-[1.2fr_0.8fr] gap-0">
          {/* Content Side */}
          <div className="p-12 md:p-20 flex flex-col justify-center border-r border-pitch">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-10">
                #Fokus Rapatnya, ndo-SPOKE yang <span className="text-accent underline decoration-pitch underline-offset-4">Buat MoM-nya.</span>
              </h1>
              
              <div className="max-w-lg space-y-6 mb-12">
                <p className="text-lg font-medium leading-relaxed opacity-80">
                  Asisten rapat native berbasis AI yang dirancang untuk profesional. 
                  Otomatis, akurat, dan sepenuhnya privat.
                </p>
                <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-widest opacity-60">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-pitch" />
                    100% Private (Local)
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-pitch" />
                    Ringan dan Cepat
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#download" 
                  className="brutalist-button bg-accent"
                >
                  <Download className="w-5 h-5" />
                  Get ndo-SPOKE
                </a>
                <a 
                  href="#features" 
                  className="brutalist-button bg-white"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="bg-pitch relative min-h-[400px] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[20px_20px]" />
             </div>
             
             {/* Abstract App Graphic */}
             <div className="relative z-10 w-4/5 aspect-4/3 bg-white brutalist-border rotate-3 shadow-[8px_8px_0px_0px_rgba(255,192,203,1)] p-6">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-pitch" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                </div>
                <div className="h-4 w-1/2 bg-muted mb-4" />
                <div className="h-2 w-full bg-muted/30 mb-2" />
                <div className="h-2 w-3/4 bg-muted/30 mb-8" />
                
                <div className="bg-accent/20 p-4 brutalist-border">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-accent" />
                      <div className="h-2 w-24 bg-pitch/40" />
                   </div>
                   <div className="h-2 w-full bg-pitch/10" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
