"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import GlowAtmosphere from '@/components/GlowAtmosphere';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink text-paper py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-50" />
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <GlowAtmosphere particleCount={36} color="255, 61, 129" />
      </div>
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-volt/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="block font-mono text-xs tracking-[0.35em] uppercase text-signal mb-6">
          Contact
        </span>
        <h2 className="font-display uppercase leading-[0.9] text-5xl sm:text-7xl">
          Let&apos;s Build
          <br />
          Something
        </h2>
        <p className="mt-8 max-w-lg mx-auto text-paper/60 text-sm sm:text-base leading-relaxed">
          I&apos;m currently exploring internship and full-time software engineering roles. If something you&apos;re building needs a builder, let&apos;s talk.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>
            <a
              href="mailto:anshukr5000t@gmail.com"
              className="px-7 py-3.5 rounded-full bg-signal text-ink font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2"
            >
              Email Me
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/anshurishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-paper/20 text-paper font-semibold text-sm hover:border-paper/50 transition-all flex items-center gap-2 group"
            >
              LinkedIn
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
