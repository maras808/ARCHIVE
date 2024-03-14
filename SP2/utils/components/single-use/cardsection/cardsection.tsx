"use client";

import { ReactNode } from "react";
import styles from "./cardsection.module.css";
import { motion } from "framer-motion";
import { join } from "@/utils/animations";

interface cardSectionProps {
  children: ReactNode;
}

export default function CardSection({ children }: cardSectionProps) {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.cardsection}
        variants={join.stagger}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        {children}
      </motion.div>
    </div>
  );
}
