import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Projects — Anshu Kumar Rishabh",
  description: "Full list of projects built by Anshu Kumar Rishabh — full-stack, AI/ML, and systems engineering work.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <GlowAtmosphere particleCount={34} color="255, 61, 129" />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-volt/6 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-signal transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <span className="block font-mono text-xs tracking-[0.35em] uppercase mb-3 text-signal">
            All Work
          </span>
          <h1 className="font-display uppercase leading-[0.92] text-4xl sm:text-6xl mb-14 bg-gradient-to-r from-paper to-paper/60 bg-clip-text text-transparent">
            Every Project
          </h1>

          <div className="space-y-3">
            {projects.map((proj, idx) => (
              <Reveal key={idx} delay={Math.min(idx * 0.05, 0.4)}>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-6 rounded-2xl border border-paper/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-signal/40 transition-all duration-300"
                >
                  <span className="md:col-span-1 font-mono text-xs text-mist group-hover:text-signal transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="md:col-span-6">
                    <h3 className="font-display uppercase text-2xl sm:text-3xl text-paper group-hover:text-signal transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-mist mt-1">{proj.subtitle}</p>
                  </div>

                  <p className="md:col-span-4 text-sm text-mist leading-relaxed">{proj.desc}</p>

                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <ArrowUpRight
                      size={22}
                      className="text-paper/60 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <div className="md:col-span-12 flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-paper/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
