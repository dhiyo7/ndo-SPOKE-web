/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Guide from './components/Guide';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Risograph Grain Overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Guide />
        <Download />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
