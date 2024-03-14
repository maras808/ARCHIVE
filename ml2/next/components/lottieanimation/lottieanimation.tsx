"use client";

import { useLottie } from "lottie-react";
import styles from "./lottieanimation.module.css";

import { useEffect } from "react";

interface lottieAnimationProps {
  animationData: any;
  loop: boolean;
  maxWidth?: number;
  isVisable?: boolean;
}

const LottieAnimation = ({
  animationData,
  loop,
  maxWidth,
  isVisable,
}: lottieAnimationProps) => {
  const options = {
    animationData,
    loop,
  };
  const { View, play, pause } = useLottie(options);

  const handlePlay = (state: boolean) => {
    if (state) {
      play();
    } else {
      pause();
    }
  };

  useEffect(() => {
    handlePlay(isVisable!);
  }, [isVisable]);

  return (
    <div className={styles.lottie} style={{ maxWidth: maxWidth }}>
      {View}
    </div>
  );
};

export default LottieAnimation;
