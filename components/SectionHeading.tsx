"use client";
import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-14">
      <span className="block font-mono text-xs tracking-[0.35em] uppercase mb-3 text-signal">
        {eyebrow}
      </span>
      <h2 className="font-display uppercase leading-[0.92] text-4xl sm:text-6xl bg-gradient-to-r from-paper to-paper/60 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  );
}
