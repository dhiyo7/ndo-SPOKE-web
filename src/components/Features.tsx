import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Lock, ListTodo, Plus } from 'lucide-react';

const features = [
  {
    icon: <Waves className="w-8 h-8" />,
    title: "#Dual-Stream",
    desc: "Mampu menangkap audio dari dua sumber sekaligus—mikrofon Anda dan suara sistem (loopback).",
    bg: "bg-white"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "#AI MoM",
    desc: "Integrasi langsung dengan AI untuk menghasilkan transkrip, ringkasan, hingga action items.",
    bg: "bg-white"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "#Full Privacy",
    desc: "Data tersimpan di Database Lokal. Anda memiliki kendali penuh untuk menggunakan API key sendiri.",
    bg: "bg-white"
  },
  {
    icon: <ListTodo className="w-8 h-8" />,
    title: "#History mgmt",
    desc: "Dilengkapi Sidebar riwayat rapat dan fitur catatan memo untuk konteks tambahan bagi AI.",
    bg: "bg-white"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-pitch">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">#Fitur Unggulan</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-pitch">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 border-r border-b border-pitch ${f.bg} hover:bg-accent transition-colors duration-200 flex flex-col min-h-[320px] group relative overflow-hidden`}
            >
              {/* Corner accent */}
              <Plus className="absolute top-4 right-4 w-4 h-4 opacity-20" />
              
              <div id={f.title.includes('Privacy') ? 'about' : undefined} className="mb-8">{f.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{f.title}</h3>
              <p className="text-sm font-medium leading-relaxed opacity-60">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom statement */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center border-t border-pitch pt-12">
           <div className="text-4xl font-extrabold uppercase tracking-tighter leading-none">
              Dibangun untuk <span className="text-accent italic">profesional</span> <br />
              yang menghargai <span className="underline">waktu</span> mereka.
           </div>
           <p className="text-sm font-medium opacity-60 leading-relaxed">
              Kami menggunakan engine Rust untuk menawarkan pengalaman aplikasi yang paling cepat dan aman. 
              
           </p>
        </div>
      </div>
    </section>
  );
}
