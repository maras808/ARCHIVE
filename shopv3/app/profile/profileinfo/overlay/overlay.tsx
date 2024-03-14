"use client";

import styles from "./overlay.module.css";
import { motion } from "framer-motion";

export default function Overlay(props) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, cursor: "pointer" }}
    >
      {props.text}
      <motion.input
        whileHover={{ cursor: "pointer" }}
        className={styles.input}
        type="file"
      />
    </motion.div>
  );
}
