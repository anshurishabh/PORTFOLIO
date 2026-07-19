import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingBadge from '@/components/FloatingBadge';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import { skills } from '@/lib/skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Skills — Anshu Kumar Rishabh",
  description: "Full tech stack and tools used by Anshu Kumar Rishabh across full-stack development and AI/ML engineering.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <GlowAtmosphere particleCount={40} color="255, 197, 61" />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-volt/6 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-signal transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <span className="block font-mono text-xs tracking-[0.35em] uppercase mb-3 text-signal">
            Full Stack
          </span>
          <h1 className="font-display uppercase leading-[0.92] text-4xl sm:text-6xl mb-14 bg-gradient-to-r from-paper to-paper/60 bg-clip-text text-transparent">
            Every Tool
          </h1>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-6">
            {skills.map((skill, idx) => (
              <FloatingBadge key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
