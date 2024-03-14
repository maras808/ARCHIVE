"use client";

import styles from "./darkmode.module.css";

import { SolarSun2Bold, MaterialSymbolsDarkMode } from "../icons/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SimpleFade } from "../animations/animations";

export default function DarkMode(props) {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={styles.darkmode}
      style={props.style}
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      <AnimatePresence>
        {isDark ? (
          <motion.div
            animate={SimpleFade.on}
            exit={SimpleFade.off}
            className={styles.wrap}
            key={"darkon"}
          >
            <SolarSun2Bold className={styles.icon}></SolarSun2Bold>
          </motion.div>
        ) : (
          <motion.div
            animate={SimpleFade.on}
            exit={SimpleFade.off}
            className={styles.wrap}
            key={"darkoff"}
          >
            <MaterialSymbolsDarkMode
              className={styles.icon}
            ></MaterialSymbolsDarkMode>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
