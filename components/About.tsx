"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import type { Props as GitHubCalendarProps } from 'react-github-calendar';
import { Code2, Brain, GraduationCap, Terminal } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import GlowAtmosphere from '@/components/GlowAtmosphere';

const GitHubCalendarComponent = dynamic<GitHubCalendarProps>(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const educationTimeline = [
  {
    level: "B.Tech in Computer Science & Engineering",
    institution: "Babu Banarasi Das University (BBDU)",
    duration: "2023 — 2027",
    points: [
      "Advanced algorithms, scalable data architectures, and full-stack system optimization.",
      "Specializing in predictive pipelines, machine learning logic, and LLM orchestration.",
    ],
  },
  {
    level: "Higher Secondary Education (Class XII)",
    institution: "Don Bosco High School, CBSE",
    duration: "2022",
    points: [
      "Senior school with a primary specialization in Physics, Chemistry, and Mathematics.",
      "Built strong analytical math skills and early engineering foundations.",
    ],
  },
  {
    level: "Secondary School Education (Class X)",
    institution: "Mahavir Saraswati Vidya Mandir, CBSE",
    duration: "2020",
    points: [
      "General science and fundamental algebraic foundations.",
      "Developed core problem-solving and logical reasoning skills.",
    ],
  },
];

export default function About() {
  const calendarTheme = {
    light: ['#12151f', '#7a3d0a', '#c76a1a', '#ffc53d', '#ff3d81'],
    dark: ['#12151f', '#7a3d0a', '#c76a1a', '#ffc53d', '#ff3d81'],
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-steel overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <GlowAtmosphere particleCount={30} color="255, 61, 129" />
      </div>
      <div className="absolute top-1/3 right-[-10%] w-[400px] h-[400px] rounded-full bg-volt/6 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="About" title="Who's Building This" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="group relative p-7 rounded-2xl border border-paper/10 bg-white/[0.03] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(255,197,61,0.08)] transition-all duration-300">
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-paper/15 group-hover:border-signal transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-paper/15 group-hover:border-signal transition-colors" />
                <div className="p-3 bg-signal/10 text-signal rounded-xl w-fit mb-4">
                  <Code2 size={22} />
                </div>
                <h3 className="font-display uppercase text-lg mb-2 text-paper">Full-Stack Core</h3>
                <p className="text-sm text-mist leading-relaxed">
                  Designing, building, and deploying responsive end-to-end web architectures — React and Next.js on the frontend, Node.js on the backend, MongoDB and SQL for structured data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="group relative p-7 rounded-2xl border border-paper/10 bg-white/[0.03] hover:border-volt/50 hover:shadow-[0_0_45px_rgba(255,61,129,0.08)] transition-all duration-300">
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-paper/15 group-hover:border-volt transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-paper/15 group-hover:border-volt transition-colors" />
                <div className="p-3 bg-volt/10 text-volt rounded-xl w-fit mb-4">
                  <Brain size={22} />
                </div>
                <h3 className="font-display uppercase text-lg mb-2 text-paper">AI Integration</h3>
                <p className="text-sm text-mist leading-relaxed">
                  Embedding predictive analytics and automation into core systems, using XGBoost pipelines alongside Google Gemini API for automated analytical insight.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {educationTimeline.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="group p-6 rounded-2xl border border-paper/10 bg-white/[0.03] hover:border-paper/25 hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-signal/10 flex items-center justify-center shrink-0 text-signal group-hover:scale-110 transition-transform">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display uppercase text-base text-paper tracking-tight">{edu.level}</h4>
                      <span className="font-mono text-[11px] text-mist">{edu.duration}</span>
                    </div>
                    <p className="text-xs font-semibold text-paper/70">{edu.institution}</p>
                    <div className="text-xs sm:text-sm text-mist space-y-1 pt-1 border-t border-paper/10">
                      {edu.points.map((pt, pIdx) => (
                        <p key={pIdx}>{pt}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 p-7 rounded-2xl border border-paper/10 bg-white/[0.03] overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-paper/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-signal" />
                <div>
                  <h3 className="font-display uppercase text-sm text-paper tracking-wide">Contribution Log</h3>
                  <p className="font-mono text-[10px] text-mist mt-1">GitHub activity, updated in real time</p>
                </div>
              </div>
              <a
                href="https://github.com/anshurishabh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-signal hover:text-volt transition-colors"
              >
                View GitHub →
              </a>
            </div>
            <div className="w-full overflow-x-auto flex justify-center">
              <div className="min-w-[760px] text-mist text-xs">
                <GitHubCalendarComponent
                  username="anshurishabh"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={11}
                  theme={calendarTheme}
                  showColorLegend={false}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
