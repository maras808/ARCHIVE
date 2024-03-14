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

export type TypewriterStaticType = {
  children: string;
  duration?: number;
};

export default function TypewriterStatic({
  children,
  duration,
}: TypewriterStaticType) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const displayText = useTransform(rounded, (v) => children.slice(0, v));
  const ref = useRef<HTMLSpanElement>(null);
  const isVisable = useInView(ref);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    isVisable &&
      animate(count, children.length, {
        type: "tween",
        duration: duration ? duration / 1000 : 1000 / 1000,
        ease: "easeOut",
        onComplete: () => {
          setIsComplete(true);
        },
      });
  }, [isVisable]);

  return (
    <Box ref={ref} position={"relative"}>
      <motion.span
        style={!isComplete ? { position: "absolute", inset: 0 } : {}}
      >
        {displayText}
      </motion.span>
      {!isComplete && <Box sx={{ opacity: 0 }}>{children}</Box>}
    </Box>
  );
}
