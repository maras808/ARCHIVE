"use client";
import { useState } from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";

interface cardProps {
  icon: any;
  title: string;
  content: string;
  animation?: any;
  subanimation?: any;
}

export default function Card({
  icon,
  title,
  content,
  animation,
  subanimation,
}: cardProps) {
  const [isCardLoaded, setIsCardLoaded] = useState<boolean>(false);

  return (
    <motion.div
      className={styles.card}
      variants={animation}
      transition={animation.transition}
      onAnimationComplete={() => {
        setIsCardLoaded(true);
      }}
    >
      <div className={styles.upper}>
        <motion.div
          className={styles.title}
          initial={subanimation.primary.hidden}
          animate={
            isCardLoaded
              ? subanimation.primary.show
              : subanimation.primary.hidden
          }
          transition={subanimation.primary.transition}
        >
          {title}
        </motion.div>
        <motion.div
          className={styles.icon}
          initial={subanimation.logo.hidden}
          animate={
            isCardLoaded ? subanimation.logo.show : subanimation.logo.hidden
          }
          transition={subanimation.logo.transition}
        >
          {icon}
        </motion.div>
      </div>
      <motion.div
        className={styles.content}
        initial={subanimation.secondary.hidden}
        animate={
          isCardLoaded
            ? subanimation.secondary.show
            : subanimation.secondary.hidden
        }
        transition={subanimation.secondary.transition}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
