"use client";

import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useLottie } from "lottie-react";
import { useEffect, useRef } from "react";

type LottieCustomType = {
  animationData: JSON;
  delay?: number;
  loop?: boolean;
  playSegments?: [number, number];
  speed?: number;
};

export default function LottieCustom({
  animationData,
  loop,
  playSegments,
  speed,
  delay,
}: LottieCustomType) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisable = useInView(ref);

  const lottieObj = useLottie({
    animationData,
    loop: !!loop,
    initialSegment: playSegments,
  });
  speed && lottieObj.setSpeed(speed);

  useEffect(() => {
    isVisable
      ? setTimeout(() => lottieObj.play(), delay ? delay : 0)
      : lottieObj.pause();
  }, [isVisable]);

  return <Box ref={ref}>{lottieObj.View}</Box>;
}
