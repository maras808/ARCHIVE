"use client";

import { rem } from "@/fonts/fonts";
import styles from "./logo.module.css";
import { motion } from "framer-motion";
import { slice } from "@/animations/animations";

interface LogoProps {
  src?: string;
  text?: string;
}

export default function Logo({ src, text }: LogoProps) {
  return (
    <div className={styles.logo}>
      {src ? (
        <img className={styles.img} src={src}></img>
      ) : (
        <motion.div
          initial={slice.off}
          whileHover={slice.on}
          transition={slice.transition}
          className={`${styles.text} ${rem.className}`}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}
