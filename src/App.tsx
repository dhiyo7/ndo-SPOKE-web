import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Guide from './components/Guide';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [latestRelease, setLatestRelease] = useState<any>(null);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const repo = import.meta.env.VITE_GITHUB_REPO; // Expected format: owner/repo
        
        if (!repo) {
          console.warn('VITE_GITHUB_REPO is not configured in environment variables.');
          return;
        }

        const headers: Record<string, string> = {
          'Accept': 'application/vnd.github.v3+json',
        };
        if (token) {
          headers['Authorization'] = `token ${token}`;
        }

        const response = await axios.get(
          `https://api.github.com/repos/${repo}/releases/latest`,
          { headers }
        );

        if (response.status === 200 && response.data) {
          setLatestRelease(response.data);
        }
      } catch (err) {
        console.error('Error fetching latest release from GitHub:', err);
      }
    };

    fetchLatestRelease();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Risograph Grain Overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Guide latestRelease={latestRelease} />
        <Download latestRelease={latestRelease} />
        <CTA />
      </main>
      <Footer latestRelease={latestRelease} />
      <BackToTop />
    </div>
  );
}

