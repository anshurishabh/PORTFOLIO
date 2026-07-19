"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MagneticButton from '@/components/MagneticButton';
import FloatingBadge from '@/components/FloatingBadge';
import GlowAtmosphere from '@/components/GlowAtmosphere';
import Reveal from '@/components/Reveal';
import { skills } from '@/lib/skills';

export default function Skills() {
  const preview = skills.slice(0, 14);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <GlowAtmosphere particleCount={34} color="255, 197, 61" />
      </div>
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-signal/6 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <div className="text-left">
          <SectionHeading eyebrow="Stack" title="Tools I Build With" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-6">
          {preview.map((skill, idx) => (
            <FloatingBadge key={skill.name} skill={skill} index={idx} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <a
                href="/skills"
                className="group px-7 py-3.5 rounded-full border border-paper/20 text-paper font-body font-semibold text-sm hover:border-signal/50 hover:text-signal transition-all flex items-center gap-2"
              >
                View All Skills
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
