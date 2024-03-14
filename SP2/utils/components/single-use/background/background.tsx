"use client";

import { ReactNode, useRef } from "react";
import styles from "./background.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import WidthWrapper from "../../multi-use/widthwrapper/widthwrapper";

interface backgroundProps {
  video: boolean;
  src: string;
  blurScale: number;
  children: ReactNode;
}

export default function Background({
  src,
  blurScale,
  children,
}: backgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const filter = useTransform(
    scrollYProgress,
    (v) => `blur(${v / blurScale}rem)`
  );
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "110%"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <WidthWrapper>
          <div className={styles.center}>
            {children}
            <motion.div
              className={styles.blur}
              style={{ y, height: scale, filter }}
            ></motion.div>
          </div>
        </WidthWrapper>
      </div>
      <motion.video
        className={styles.background}
        style={{ y, filter, scale }}
        ref={ref}
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
      </motion.video>
    </div>
  );
}
