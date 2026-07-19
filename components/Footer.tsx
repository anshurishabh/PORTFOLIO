"use client";
import React from 'react';
import GlowAtmosphere from '@/components/GlowAtmosphere';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper/50 py-8 border-t border-paper/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <GlowAtmosphere particleCount={18} color="255, 197, 61" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div>© {new Date().getFullYear()} Anshu Kumar Rishabh</div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-paper transition-colors">About</a>
          <a href="#projects" className="hover:text-paper transition-colors">Work</a>
          <a href="#contact" className="hover:text-paper transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
