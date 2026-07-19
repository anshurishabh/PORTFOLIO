"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import RoleRotator from '@/components/RoleRotator';
import Marquee from '@/components/Marquee';
import GlowAtmosphere from '@/components/GlowAtmosphere';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const techMarquee = [
  "NEXT.JS", "REACT", "PYTHON", "MACHINE LEARNING", "NODE.JS", "TYPESCRIPT", "XGBOOST", "MONGODB",
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#05060a] via-[#080a11] to-[#05060a] text-paper overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-texture pointer-events-none" />
      {/* Ambient particle/glow atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <GlowAtmosphere particleCount={50} color="255, 197, 61" />
      </div>
      {/* Ambient glow — restrained, premium */}
      <div className="absolute top-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-volt/8 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[450px] h-[450px] rounded-full bg-signal/6 blur-[150px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-40 pb-16 min-h-screen flex flex-col justify-center"
      >
        <motion.span variants={item} className="font-mono text-xs tracking-[0.4em] uppercase text-mist mb-6">
          Portfolio / 2026
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display uppercase leading-[0.9] text-[11vw] sm:text-[6vw] lg:text-[5vw] tracking-tight"
        >
          Anshu Kumar
          <br />
          Rishabh
        </motion.h1>

        <motion.div variants={item} className="mt-8 font-body text-2xl sm:text-3xl text-paper/70">
          Building as a <RoleRotator roles={["Full-Stack Developer", "AI/ML Engineer", "Problem Solver", "Systems Builder"]} />
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-xl font-body text-sm sm:text-base text-paper/50 leading-relaxed">
          I design and ship intelligent, production-ready software — from real-time data pipelines to agentic AI workflows, built to scale.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <MagneticButton>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-signal text-ink font-body font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/Anshu_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-paper/20 text-paper font-body font-semibold text-sm hover:border-paper/50 transition-all flex items-center gap-2"
            >
              View Resume
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <Marquee items={techMarquee} />
    </section>
  );
}
