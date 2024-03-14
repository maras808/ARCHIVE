"use client";

import { useLottie } from "lottie-react";
import styles from "./lottiecustom.module.css";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface lottieProps {
  animationData: any;
  loop: boolean;
}

export default function LottieCustom({ animationData, loop }: lottieProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisable = useInView(ref);
  const options = { animationData, loop };
  const lottieObj = useLottie(options);

  const handlePlay = (state: boolean) => {
    state ? lottieObj.play() : lottieObj.pause();
  };

  useEffect(() => {
    handlePlay(isVisable);
  }, [isVisable]);

  return (
    <div className={styles.lottie} ref={ref}>
      {lottieObj.View}
    </div>
  );
}
