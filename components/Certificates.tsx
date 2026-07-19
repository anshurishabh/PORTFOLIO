"use client";
import React from 'react';
import { Award, ArrowUpRight, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import { certificates } from '@/lib/data';

export default function Certificates() {
  const preview = certificates.slice(0, 3);

  return (
    <section id="certificates" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <GlowAtmosphere particleCount={30} color="255, 197, 61" />
      </div>
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-signal/6 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Proof" title="Verified Credentials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
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

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <a
                href="/certificates"
                className="group px-7 py-3.5 rounded-full border border-paper/20 text-paper font-body font-semibold text-sm hover:border-signal/50 hover:text-signal transition-all flex items-center gap-2"
              >
                See More Certificates
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
