import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function GuideSection() {
  const [activeTab, setActiveTab] = useState<'windows' | 'macos' | 'linux'>('windows');
  const [copiedText, setCopiedText] = useState<'linux-deb' | 'linux-rpm' | 'macos' | null>(null);

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes('win')) {
      setActiveTab('windows');
    } else if (ua.includes('mac')) {
      setActiveTab('macos');
    } else if (ua.includes('linux')) {
      setActiveTab('linux');
    }
  }, []);

  const linuxDebCommands = `sudo dpkg -i ndo-spoke_1.0.0_amd64.deb\nsudo apt-get install -f`;
  const linuxRpmCommands = `sudo rpm -i ndo-spoke_1.0.0_amd64.rpm`;
  const macosQuarantineCommand = `sudo xattr -rd com.apple.quarantine /Applications/ndo-SPOKE.app`;

  const copyToClipboard = (text: string, id: 'linux-deb' | 'linux-rpm' | 'macos') => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="guide" className="py-24 px-6 border-t border-pitch bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-pitch text-white text-[10px] font-black uppercase tracking-widest mb-4">
            📖 Panduan Instalasi
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">
            Installation <span className="text-accent italic">Instructions</span>
          </h2>
          <p className="text-sm font-medium opacity-60 max-w-xl mx-auto">
            Ikuti petunjuk langkah demi langkah berikut untuk memasang ndo-SPOKE pada sistem operasi komputer Anda.
          </p>
        </div>

        {/* Installation Instructions Panel */}
        <div className="brutalist-border bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Platforms Tabs */}
          <div className="flex border-b border-pitch bg-canvas/30">
            <button
              onClick={() => setActiveTab('windows')}
              className={`flex-1 py-4 text-xs font-black uppercase tracking-widest border-r border-pitch last:border-r-0 transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'windows' ? 'bg-pitch text-white' : 'bg-transparent text-pitch hover:bg-pitch/5'
              }`}
            >
              <span>🪟</span> Windows
            </button>
            <button
              onClick={() => setActiveTab('macos')}
              className={`flex-1 py-4 text-xs font-black uppercase tracking-widest border-r border-pitch last:border-r-0 transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'macos' ? 'bg-pitch text-white' : 'bg-transparent text-pitch hover:bg-pitch/5'
              }`}
            >
              <span>🍎</span> macOS (Important)
            </button>
            <button
              onClick={() => setActiveTab('linux')}
              className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'linux' ? 'bg-pitch text-white' : 'bg-transparent text-pitch hover:bg-pitch/5'
              }`}
            >
              <span>🐧</span> Linux (Ubuntu/Fedora)
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'windows' && (
                <motion.div
                  key="windows-instructions"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-pitch text-white flex items-center justify-center text-xs font-black shrink-0">1</div>
                    <div>
                      <p className="text-sm font-bold text-pitch uppercase tracking-tight">Unduh Berkas Aplikasi</p>
                      <p className="text-xs font-medium opacity-70 mt-1">
                        Download file <code className="bg-canvas px-1.5 py-0.5 border border-pitch/20 font-mono text-[10px]">.exe</code> atau <code className="bg-canvas px-1.5 py-0.5 border border-pitch/20 font-mono text-[10px]">.msi</code> dari Latest Release resmi kami.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-pitch text-white flex items-center justify-center text-xs font-black shrink-0">2</div>
                    <div>
                      <p className="text-sm font-bold text-pitch uppercase tracking-tight">Jalankan File Installer</p>
                      <p className="text-xs font-medium opacity-70 mt-1">
                        Jalankan installer yang baru saja diunduh. Jika sistem memunculkan pop-up perlindungan <span className="font-bold">"Windows Protected your PC"</span>, silakan klik tombol <span className="underline font-bold text-pitch cursor-pointer">More Info</span> lalu pilih <span className="bg-pitch text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Run Anyway</span>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/20 border border-pitch flex gap-3 mt-6">
                    <ShieldCheck className="w-5 h-5 text-pitch shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest">Informasi Keamanan</p>
                      <p className="text-[11px] font-medium leading-relaxed mt-1 opacity-80">
                        Peringatan SmartScreen ini muncul murni karena sertifikat penandatanganan indie developer gratis. Aplikasi kami 100% aman, bersifat lokal, dan open-source.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'macos' && (
                <motion.div
                  key="macos-instructions"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="p-4 bg-red-500/10 border border-red-500 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-red-600">Catatan Penting macOS</p>
                      <p className="text-[11px] font-medium leading-relaxed mt-1 text-red-700">
                        Karena ndo-SPOKE saat ini belum menggunakan Apple Developer Certificate (Indie Version), macOS akan memberikan peringatan keamanan standar. Jangan panik, silakan ikuti petunjuk berikut untuk membukanya.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-pitch/10 pt-4">
                    <p className="text-xs font-black uppercase tracking-widest text-pitch mb-4">🚀 Cara Cepat:</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                        <p className="text-xs font-medium opacity-80 mt-0.5">
                          Pindahkan ikon aplikasi <span className="font-bold">ndo-SPOKE</span> ke dalam folder <span className="font-bold">Applications</span> Anda.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                        <p className="text-xs font-medium opacity-80 mt-0.5">
                          <span className="font-black underline">Klik Kanan</span> (jangan langsung klik ganda / double-click) pada ikon aplikasi di folder Applications, lalu klik opsi <span className="font-bold">Open</span>.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                        <p className="text-xs font-medium opacity-80 mt-0.5">
                          Klik tombol <span className="bg-pitch text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Open</span> sekali lagi pada jendela konfirmasi yang muncul.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-pitch/20 pt-6">
                    <p className="text-xs font-black uppercase tracking-widest text-pitch mb-3">🛠️ Jika Muncul Pesan "App is Damaged" (Gatekeeper Block):</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                        <p className="text-xs font-medium opacity-80 mt-0.5">
                          Buka aplikasi <span className="font-bold">Terminal</span> bawaan Mac Anda.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                        <div className="flex-1 space-y-2">
                          <p className="text-xs font-medium opacity-80">
                            Ketik perintah di bawah ini, jalankan, lalu masukkan password perangkat Mac Anda jika diminta:
                          </p>
                          <div className="relative font-mono text-[11px] bg-canvas p-4 border border-pitch flex items-center justify-between group">
                            <span className="break-all whitespace-pre-wrap select-all">{macosQuarantineCommand}</span>
                            <button
                              onClick={() => copyToClipboard(macosQuarantineCommand, 'macos')}
                              className="p-1.5 brutalist-border bg-white hover:bg-accent shrink-0 ml-3 transition-colors"
                              title="Salin Perintah"
                            >
                              {copiedText === 'macos' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-pitch text-white flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                        <p className="text-xs font-medium opacity-80 mt-0.5">
                          Buka kembali aplikasi seperti biasa. Peringatan pemblokiran macOS kini sudah berhasil dihilangkan!
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'linux' && (
                <motion.div
                  key="linux-instructions"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-pitch text-white flex items-center justify-center text-xs font-black shrink-0">1</div>
                    <div>
                      <p className="text-sm font-bold text-pitch uppercase tracking-tight">Unduh Berkas Rilis</p>
                      <p className="text-xs font-medium opacity-70 mt-1">
                        Download berkas aplikasi <code className="bg-canvas px-1.5 py-0.5 border border-pitch/20 font-mono text-[10px] font-bold">.deb</code> untuk Ubuntu/Debian, atau berkas <code className="bg-canvas px-1.5 py-0.5 border border-pitch/20 font-mono text-[10px] font-bold">.rpm</code> untuk Fedora/RHEL dari rilis terbaru kami.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-pitch/10 pt-4">
                    <div className="w-6 h-6 rounded-full bg-pitch text-white flex items-center justify-center text-xs font-black shrink-0">2</div>
                    <div className="flex-1 space-y-4">
                      {/* Debian install */}
                      <div className="space-y-2">
                        <p className="text-xs font-black uppercase tracking-wider text-pitch">🐧 Untuk Ubuntu / Debian (.deb):</p>
                        <p className="text-xs font-medium opacity-70">
                          Buka terminal Anda di direktori folder unduhan (Downloads), lalu ketik dan jalankan perintah di bawah ini:
                        </p>
                        <div className="relative font-mono text-[11px] bg-canvas p-4 border border-pitch flex items-center justify-between group">
                          <span className="whitespace-pre-wrap select-all">{linuxDebCommands}</span>
                          <button
                            onClick={() => copyToClipboard(linuxDebCommands, 'linux-deb')}
                            className="p-1.5 brutalist-border bg-white hover:bg-accent shrink-0 ml-3 transition-colors"
                            title="Salin Perintah"
                          >
                            {copiedText === 'linux-deb' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* RPM install */}
                      <div className="space-y-2 border-t border-pitch/10 pt-4">
                        <p className="text-xs font-black uppercase tracking-wider text-pitch">🎩 Untuk Fedora / RedHat (.rpm):</p>
                        <p className="text-xs font-medium opacity-70">
                          Buka terminal Anda di direktori folder unduhan (Downloads), lalu ketik dan jalankan perintah di bawah ini:
                        </p>
                        <div className="relative font-mono text-[11px] bg-canvas p-4 border border-pitch flex items-center justify-between group">
                          <span className="whitespace-pre-wrap select-all">{linuxRpmCommands}</span>
                          <button
                            onClick={() => copyToClipboard(linuxRpmCommands, 'linux-rpm')}
                            className="p-1.5 brutalist-border bg-white hover:bg-accent shrink-0 ml-3 transition-colors"
                            title="Salin Perintah"
                          >
                            {copiedText === 'linux-rpm' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
