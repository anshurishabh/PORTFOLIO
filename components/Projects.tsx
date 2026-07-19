"use client";
import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import MagneticButton from '@/components/MagneticButton';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import { projects } from '@/lib/data';

export default function Projects() {
  const preview = projects.slice(0, 4);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-steel overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <GlowAtmosphere particleCount={30} color="255, 61, 129" />
      </div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-volt/6 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Work" title="Selected Projects" />

        <div className="space-y-3">
          {preview.map((proj, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
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

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <a
                href="/projects"
                className="group px-7 py-3.5 rounded-full border border-paper/20 text-paper font-body font-semibold text-sm hover:border-signal/50 hover:text-signal transition-all flex items-center gap-2"
              >
                See More Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
