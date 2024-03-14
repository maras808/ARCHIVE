"use client";

import { useState } from "react";
import styles from "./darkmode.module.css";
import {
  MaterialSymbolsDarkMode,
  MaterialSymbolsLightMode,
} from "@/icones/icones";
import { fade } from "@/animations/animations";
import Bubble, { BubblePropsEnum } from "../bubble/bubble";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={styles.darkmode} onClick={() => handleDarkMode()}>
      <AnimatePresence>
        {darkMode ? (
          <motion.div
            initial={false}
            animate={fade.on}
            exit={fade.off}
            key={"dark"}
            className={styles.entry}
          >
            <MaterialSymbolsDarkMode
              className={styles.dark}
            ></MaterialSymbolsDarkMode>
            <Bubble
              animation={fade}
              orientation={{ top: BubblePropsEnum.p120 }}
            >
              Tryb ciemny
            </Bubble>
          </motion.div>
        ) : (
          <motion.div
            initial={fade.off}
            animate={fade.on}
            exit={fade.off}
            key={"light"}
            className={styles.entry}
          >
            <MaterialSymbolsLightMode
              className={styles.light}
            ></MaterialSymbolsLightMode>
            <Bubble
              animation={fade}
              orientation={{ top: BubblePropsEnum.p120 }}
            >
              Tryb jasny
            </Bubble>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
