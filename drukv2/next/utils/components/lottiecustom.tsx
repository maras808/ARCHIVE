"use client";

import { Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useLottie } from "lottie-react";
import { useEffect, useRef } from "react";

interface lottieProps {
  animationData: any;
  loop?: boolean;
  playSegments?: [number, number];
  speed?: number;
}

export default function LottieCustom({
  animationData,
  loop,
  playSegments,
  speed,
}: lottieProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisable = useInView(ref);

  const options = { animationData, loop: !!loop, initialSegment: playSegments };

  const lottieObj = useLottie(options);
  speed && lottieObj.setSpeed(speed);

  const handlePlay = (state: boolean) => {
    state ? lottieObj.play() : lottieObj.pause();
  };

  useEffect(() => {
    handlePlay(isVisable);
  }, [isVisable]);

  return <Box ref={ref}>{lottieObj.View}</Box>;
}
