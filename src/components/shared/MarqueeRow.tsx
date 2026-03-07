"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeRowProps {
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
  children: ReactNode;
}

/**
 * A reusable marquee row component that creates an infinite scrolling animation.
 * The children should be duplicated to create a seamless loop effect.
 */
export function MarqueeRow({
  direction = "left",
  speed = 35,
  gap = 4,
  children,
}: MarqueeRowProps) {
  const isLeft = direction === "left";

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex"
        style={{ gap: `${gap * 0.25}rem` }}
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
