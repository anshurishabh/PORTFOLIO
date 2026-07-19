"use client";
import React from "react";

export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 py-4">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center px-6 font-display text-lg sm:text-2xl uppercase tracking-tight text-paper/80 whitespace-nowrap"
          >
            {item}
            <span className="ml-6 text-signal">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
