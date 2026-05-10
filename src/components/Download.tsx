import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Terminal, ArrowDownToLine, Github, Plus } from 'lucide-react';

export default function DownloadSection() {
  const [detectedOS, setDetectedOS] = useState<'windows' | 'macos' | 'linux' | 'other'>('other');

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes('win')) {
      setDetectedOS('windows');
    } else if (ua.includes('mac')) {
      setDetectedOS('macos');
    } else if (ua.includes('linux')) {
      setDetectedOS('linux');
    }
  }, []);

  const downloadLinks = {
    windows: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_x64-setup.exe',
    macosM1: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_aarch64.dmg',
    macosIntel: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_x64.dmg',
    linuxDeb: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_amd64.deb',
    linuxRpm: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_amd64.rpm',
    linuxAppImage: 'https://github.com/dhiyo7/ndo-SPOKE/releases/download/ndo-spoke-v1.0.0/ndo-spoke_1.0.0_amd64.AppImage',
    releasesPage: 'https://github.com/dhiyo7/ndo-SPOKE/releases/tag/ndo-spoke-v1.0.0'
  };

  return (
    <section id="download" className="py-24 px-6 border-t border-pitch bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-pitch text-white text-[10px] font-black uppercase tracking-widest mb-4">
            <ArrowDownToLine className="w-3 h-3 animate-bounce" /> Get the App
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">
            Download <span className="text-accent italic">ndo-SPOKE</span>
          </h2>
          <p className="text-sm font-medium opacity-60 max-w-xl mx-auto">
            Aplikasi asisten rapat AI murni native dan 100% privat untuk komputer Anda. 
            Pilih paket instalasi yang sesuai dengan sistem operasi Anda.
          </p>
        </div>

        {/* OS Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Windows OS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`brutalist-card relative flex flex-col justify-between min-h-[380px] p-8 bg-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,192,203,1)] ${
              detectedOS === 'windows' ? 'border-2 border-pitch ring-4 ring-accent/30' : ''
            }`}
          >
            {detectedOS === 'windows' && (
              <span className="absolute top-4 right-4 bg-pitch text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5">
                Recommended
              </span>
            )}
            <Plus className="absolute bottom-4 right-4 w-4 h-4 opacity-20" />
            
            <div>
              <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-accent/20 mb-6">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Windows</h3>
              <p className="text-xs font-medium opacity-60 mb-8 leading-relaxed">
                Kompatibel dengan Windows 10 & 11 (64-bit). Dilengkapi dengan instalasi otomatis satu klik yang sangat cepat.
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href={downloadLinks.windows}
                className="brutalist-button w-full bg-pitch text-white text-xs hover:bg-accent hover:text-pitch text-center"
              >
                Download for Windows (.exe)
              </a>
              <div className="text-[10px] text-center font-mono opacity-40">
                v1.0.0 • x64 Setup Installer
              </div>
            </div>
          </motion.div>

          {/* macOS OS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`brutalist-card relative flex flex-col justify-between min-h-[380px] p-8 bg-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,192,203,1)] ${
              detectedOS === 'macos' ? 'border-2 border-pitch ring-4 ring-accent/30' : ''
            }`}
          >
            {detectedOS === 'macos' && (
              <span className="absolute top-4 right-4 bg-pitch text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5">
                Recommended
              </span>
            )}
            <Plus className="absolute bottom-4 right-4 w-4 h-4 opacity-20" />

            <div>
              <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-accent/20 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">macOS</h3>
              <p className="text-xs font-medium opacity-60 mb-8 leading-relaxed">
                Rilis resmi dalam format paket disk image (.dmg). Tersedia untuk chip Apple Silicon modern maupun prosesor Intel.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href={downloadLinks.macosM1}
                  className="brutalist-button text-[10px] px-2 py-2.5 bg-pitch text-white hover:bg-accent hover:text-pitch text-center"
                >
                  Apple M1/M2/M3
                </a>
                <a 
                  href={downloadLinks.macosIntel}
                  className="brutalist-button text-[10px] px-2 py-2.5 bg-white text-pitch hover:bg-pitch hover:text-white text-center"
                >
                  Intel Chip
                </a>
              </div>
              <div className="text-[10px] text-center font-mono opacity-40">
                v1.0.0 • Universal DMG Package
              </div>
            </div>
          </motion.div>

          {/* Linux OS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`brutalist-card relative flex flex-col justify-between min-h-[380px] p-8 bg-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,192,203,1)] ${
              detectedOS === 'linux' ? 'border-2 border-pitch ring-4 ring-accent/30' : ''
            }`}
          >
            {detectedOS === 'linux' && (
              <span className="absolute top-4 right-4 bg-pitch text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5">
                Recommended
              </span>
            )}
            <Plus className="absolute bottom-4 right-4 w-4 h-4 opacity-20" />

            <div>
              <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-accent/20 mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Linux</h3>
              <p className="text-xs font-medium opacity-60 mb-8 leading-relaxed">
                Tersedia paket Debian (.deb), RedHat (.rpm) untuk integrasi desktop serta paket portabel AppImage untuk semua distro Linux.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-1">
                <a 
                  href={downloadLinks.linuxDeb}
                  className="brutalist-button text-[9px] px-1 py-2.5 bg-pitch text-white hover:bg-accent hover:text-pitch text-center"
                >
                  Deb (.deb)
                </a>
                <a 
                  href={downloadLinks.linuxRpm}
                  className="brutalist-button text-[9px] px-1 py-2.5 bg-white text-pitch hover:bg-accent hover:text-pitch text-center"
                >
                  Rpm (.rpm)
                </a>
                <a 
                  href={downloadLinks.linuxAppImage}
                  className="brutalist-button text-[9px] px-1 py-2.5 bg-white text-pitch hover:bg-pitch hover:text-white text-center"
                >
                  AppImage
                </a>
              </div>
              <div className="text-[10px] text-center font-mono opacity-40">
                v1.0.0 • x64 Linux Packages
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer info inside Download */}
        <div className="brutalist-border p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pitch flex items-center justify-center text-white">
              <Github className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold uppercase tracking-tight">
              Ingin melihat kode sumber atau kontribusi ke repositori?
            </p>
          </div>
          <a 
            href={downloadLinks.releasesPage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-black uppercase tracking-widest border-b-2 border-pitch hover:text-accent hover:border-accent transition-colors pb-0.5"
          >
            Kunjungi GitHub Releases ↗
          </a>
        </div>
      </div>
    </section>
  );
}
