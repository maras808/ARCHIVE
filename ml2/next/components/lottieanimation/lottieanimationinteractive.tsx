"use client";

import { useLottie, useLottieInteractivity } from "lottie-react";
import styles from "./lottieanimation.module.css";
import useOnScreen from "@/customhooks/useOnScreen";
import { useEffect, useRef } from "react";

interface lottieAnimationInteractiveProps {
  animationData: any;
  loop: boolean;
  maxWidth?: number;
}

const LottieAnimationInteractive = ({
  animationData,
  loop,
  maxWidth,
}: lottieAnimationInteractiveProps) => {
  const options = {
    animationData,
    loop: loop,
  };

  const ref = useRef<HTMLDivElement>(null);
  const isVisable = useOnScreen(ref);
  const lottieObj = useLottie(options);

  const handlePlay = (state: boolean) => {
    if (state) {
      lottieObj.play();
    }
  };

  useEffect(() => {
    handlePlay(isVisable);
  }, [isVisable]);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 500],
      },
    ],
  });
  return (
    <div className={styles.lottie} style={{ maxWidth: maxWidth }} ref={ref}>
      {Animation}
    </div>
  );
};

export default LottieAnimationInteractive;
