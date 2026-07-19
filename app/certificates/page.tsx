import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import { certificates } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Certificates — Anshu Kumar Rishabh",
  description: "Full list of verified certificates and credentials earned by Anshu Kumar Rishabh.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <GlowAtmosphere particleCount={34} color="255, 197, 61" />
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-signal/6 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <Link
            href="/#certificates"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-signal transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <span className="block font-mono text-xs tracking-[0.35em] uppercase mb-3 text-signal">
            All Proof
          </span>
          <h1 className="font-display uppercase leading-[0.92] text-4xl sm:text-6xl mb-14 bg-gradient-to-r from-paper to-paper/60 bg-clip-text text-transparent">
            Every Certificate
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <Reveal key={idx} delay={Math.min(idx * 0.05, 0.4)}>
                <TiltCard className="w-full h-full">
                  <div className="h-full p-6 rounded-2xl border border-paper/10 bg-white/[0.03] hover:border-signal/50 hover:shadow-[0_0_40px_rgba(255,197,61,0.1)] transition-all duration-300 flex flex-col justify-between gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-2.5 rounded-xl bg-signal/10 text-signal">
                        <Award size={20} />
                      </div>
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-mist hover:text-volt transition-colors"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                    <div>
                      <h3 className="font-display uppercase text-base text-paper leading-snug">{cert.title}</h3>
                      <p className="text-xs text-mist mt-1">{cert.issuer}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((sk, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-paper/60">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
