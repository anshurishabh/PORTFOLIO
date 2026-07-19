"use client";
import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Skill } from "@/lib/skills";

export default function FloatingBadge({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  const shouldReduceMotion = useReducedMotion();

  // Each badge gets its own organic drift pattern so the whole cloud
  // feels alive rather than uniformly bobbing in sync.
  const { duration, delay, distance } = useMemo(() => {
    const seed = (index * 37) % 13;
    return {
      duration: 3 + (seed % 5) * 0.4,
      delay: (index % 7) * 0.18,
      distance: 6 + (seed % 4) * 2,
    };
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.04 }}
      className="inline-block"
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, -distance, 0, distance * 0.6, 0], rotate: [0, 1.5, 0, -1.5, 0] }
        }
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-paper/10 bg-white/[0.04] backdrop-blur-sm hover:border-paper/30 transition-colors duration-300 cursor-default"
        style={{ boxShadow: `0 0 0px ${skill.color}00` }}
      >
        <Icon size={17} style={{ color: skill.color }} className="shrink-0" />
        <span className="font-mono text-xs sm:text-sm text-paper/80 group-hover:text-paper whitespace-nowrap">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
