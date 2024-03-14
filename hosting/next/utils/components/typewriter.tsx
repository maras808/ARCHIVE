"use client";

import { Box } from "@mui/material";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type typewriterType = {
  text: string;
  duration?: number;
};

export default function Typewriter({ text, duration }: typewriterType) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const displayText = useTransform(rounded, (v) => text.slice(0, v));
  const ref = useRef<HTMLSpanElement>(null);
  const isVisable = useInView(ref);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    isVisable &&
      animate(count, text.length, {
        type: "tween",
        duration: duration ? duration / 1000 : 1000 / 1000,
        ease: "easeOut",
        onComplete: () => {
          setIsComplete(true);
        },
      });
  }, [isVisable]);

  return (
    <Box position={"relative"}>
      <motion.span
        ref={ref}
        style={!isComplete ? { position: "absolute", inset: 0 } : {}}
      >
        {displayText}
      </motion.span>
      {!isComplete && <Box sx={{ opacity: 0 }}>{text}</Box>}
    </Box>
  );
}
