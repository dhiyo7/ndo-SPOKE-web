import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    type: 'bug'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [issueUrl, setIssueUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    setStatus('loading');
    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const repo = import.meta.env.VITE_GITHUB_REPO; // Expected format: owner/repo

      if (!token || !repo) {
        setStatus('error');
        setErrorMessage('Konfigurasi GitHub belum lengkap. VITE_GITHUB_TOKEN dan VITE_GITHUB_REPO harus diset.');
        return;
      }

      const response = await axios.post(
        `https://api.github.com/repos/${repo}/issues`,
        {
          title: `[${formData.type.toUpperCase()}] ${formData.title}`,
          body: `**Reported by:** ${formData.name || 'Anonymous'}\n\n**Description:**\n${formData.description}`,
          labels: [formData.type]
        },
        {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 201 || response.status === 200) {
        setStatus('success');
        setIssueUrl(response.data.html_url);
        setFormData({ name: '', title: '', description: '', type: 'bug' });
      } else {
        setStatus('error');
        setErrorMessage('Terjadi kesalahan saat melaporkan issue ke GitHub.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err.response?.data?.message || 'Terjadi kesalahan koneksi saat mengirim ke GitHub.'
      );
    }
  };

  return (
    <section id="report" className="py-24 px-6 border-t border-pitch bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 brutalist-border overflow-hidden">
          {/* Left Side Info */}
          <div className="p-12 md:p-20 flex flex-col justify-center border-r border-pitch bg-canvas">
             <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-pitch text-white text-[10px] font-black uppercase tracking-widest self-start">
               <Github className="w-3 h-3" />
               GitHub Integration
             </div>
             <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-12">
               #LAPORKAN <br />
               ISSUE & <br />
               <span className="text-accent underline decoration-pitch underline-offset-4 italic">FEEDBACK</span> <br />
               KE GITHUB
             </h2>
             <p className="text-sm font-bold uppercase tracking-widest opacity-40">
               Bantu kami mengembangkan NDO-SPOKE lebih baik lagi. <br />
               Issue yang anda laporkan akan langsung muncul di repositori kami.
             </p>
          </div>

          {/* Right Side Form (Soft Pink) */}
          <div className="p-12 md:p-16 bg-accent flex flex-col gap-8 relative overflow-hidden">
             <AnimatePresence mode="wait">
               {status === 'success' ? (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="flex flex-col items-center justify-center h-full text-center py-12"
                 >
                   <CheckCircle2 className="w-16 h-16 mb-6 text-pitch" />
                   <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Berhasil Dilaporkan!</h3>
                   <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-8">
                     Terima kasih atas masukan Anda. Anda dapat melihat progressnya di GitHub.
                   </p>
                   <div className="flex flex-col gap-4 w-full">
                     <a 
                       href={issueUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="brutalist-button bg-pitch text-white w-full py-4 text-sm flex justify-center items-center gap-2"
                     >
                       LIHAT DI GITHUB <ArrowUpRight className="w-5 h-5" />
                     </a>
                     <button 
                       onClick={() => setStatus('idle')}
                       className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                     >
                       LAPORKAN LAGI
                     </button>
                   </div>
                 </motion.div>
               ) : (
                 <motion.form 
                   key="form"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   onSubmit={handleSubmit} 
                   className="flex flex-col gap-8 h-full"
                 >
                    <div className="space-y-5">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Nama (Opsional)</label>
                             <input 
                               type="text" 
                               value={formData.name}
                               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                               placeholder="Nama Anda..." 
                               className="brutalist-input border-pitch/20 focus:border-pitch bg-white/20"
                             />
                          </div>
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Tipe Issue</label>
                             <select 
                               value={formData.type}
                               onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                               className="brutalist-input border-pitch/20 focus:border-pitch bg-white/20 appearance-none"
                             >
                               <option value="bug">Bug / Masalah</option>
                               <option value="enhancement">Request Fitur</option>
                               <option value="feedback">Feedback Umum</option>
                             </select>
                          </div>
                       </div>
                       
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Judul Issue</label>
                          <input 
                            required
                            type="text" 
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Apa yang terjadi?" 
                            className="brutalist-input border-pitch/20 focus:border-pitch bg-white/20"
                          />
                       </div>

                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Deskripsi Lengkap</label>
                          <textarea 
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={4}
                            placeholder="Berikan detail lebih lanjut..." 
                            className="brutalist-input border-pitch/20 focus:border-pitch bg-white/20 min-h-[120px] py-4"
                          />
                       </div>

                       {status === 'error' && (
                         <div className="p-4 bg-red-500/10 border border-red-500 flex items-center gap-3 text-red-600">
                           <AlertCircle className="w-5 h-5 shrink-0" />
                           <p className="text-[10px] font-black uppercase tracking-widest">{errorMessage}</p>
                         </div>
                       )}
                    </div>
                    
                    <button 
                      disabled={status === 'loading'}
                      data-umami-event="report-issue"
                      className="brutalist-button bg-pitch text-white w-full py-4 text-sm group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {status === 'loading' ? (
                         <>
                           SEDANG MENGIRIM...
                           <Loader2 className="w-5 h-5 animate-spin" />
                         </>
                       ) : (
                         <>
                           KIRIM ISSUE KE GITHUB
                           <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </>
                       )}
                    </button>
                 </motion.form>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
