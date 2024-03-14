import styles from "./exploreentry.module.css";
import { ReactNode, useEffect, useRef } from "react";
import LottieAnimation from "../lottieanimation/lottieanimation";
import useOnScreen from "@/customhooks/useOnScreen";

import store from "@/stores/store";
import { useSnapshot } from "valtio";

interface programingProps {
  reverse?: boolean;
  animation: any;
  id?: string;
  children: ReactNode;
  loop?: boolean;
  disableHeight?: boolean;
}

export default function ExploreEntry({
  reverse,
  animation,
  id,
  children,
  loop,
  disableHeight,
}: programingProps) {
  const snapshot = useSnapshot(store);
  const ref = useRef<HTMLDivElement>(null);
  const isVisable = useOnScreen(ref);

  useEffect(() => {
    isVisable && id ? snapshot.changeCurrentId(id) : null;
  }, [isVisable]);

  return (
    <div
      className={styles.entry}
      id={id ? id : ""}
      style={
        reverse
          ? { flexDirection: "row-reverse" }
          : disableHeight
          ? { height: "auto" }
          : {}
      }
      ref={ref}
    >
      <div className={styles.canvas}>
        <LottieAnimation
          animationData={animation}
          loop={loop ? loop : false}
          isVisable={isVisable}
        ></LottieAnimation>
      </div>
      <div className={styles.desc}>{children}</div>
    </div>
  );
}
