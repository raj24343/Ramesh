"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TechMarquee({ items }: { items: string[] }) {
  const reduced = useReducedMotion();
  const repeated = [...items, ...items];

  if (reduced) {
    return (
      <div className="flex flex-wrap gap-2 px-4">
        {items.map((item) => (
          <span key={item} className="marquee-chip">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-3 px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-chip">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
