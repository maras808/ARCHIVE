"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from "./bubble.module.css";
import { AnimatePresence, MotionStyle, motion } from "framer-motion";

export enum BubblePropsEnum {
  p120 = "120%",
}

interface BubbleProps {
  children: ReactNode;
  orientation: Pick<MotionStyle, "top" | "bottom" | "left" | "right">;
  animation?: {
    [key: string]: any;
  };
}

export default function Bubble({
  children,
  orientation,
  animation,
}: BubbleProps) {
  const [isOn, setIsOn] = useState(Boolean);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setTimeout(() => {
        setIsOn(false);
      }, 850);
    }
  }, [isOn]);

  return (
    <div
      className={styles.bubble}
      onMouseEnter={() => {
        setIsOn(true);
      }}
      onMouseLeave={() => {
        setIsOn(false);
      }}
    >
      <AnimatePresence>
        {isOn ? (
          <motion.div
            className={styles.text}
            style={orientation}
            initial={animation?.off}
            animate={animation?.on}
            exit={animation?.off}
          >
            {children}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}
