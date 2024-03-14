"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface animatedCounterProps {
  from: number;
  to: number;
  roundTo: number;
  duration: number;
}

export default function AnimatedCounter({
  from,
  to,
  roundTo,
  duration,
}: animatedCounterProps) {
  const count = useMotionValue<Number>(from);
  const rounded = useTransform(count, (v) => v.toFixed(roundTo));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, {
        type: "tween",
        ease: "easeInOut",
        duration,
      });
    }
  }, [inView]);

  return <motion.div ref={ref}>{rounded}</motion.div>;
}
