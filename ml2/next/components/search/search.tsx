"use client";

import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { shuffle } from "@/animations/animations";

export default function Search() {
  const [searchVal, setSearchVal] = useState(String);
  const [index, setIndex] = useState(Number);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const placeholderTimeout = 6000;

  const placeholder = [
    "Znajdź informacje o mnie",
    "Rozwijajmy się razem",
    "Test placeholder remove this",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % placeholder.length);
    }, placeholderTimeout);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className={styles.search}>
      <label className={styles.placeholder} htmlFor="searchinput">
        <AnimatePresence>
          {isInputFocused || searchVal ? null : (
            <motion.div
              className={styles.text}
              key={index}
              initial={shuffle.fromTop}
              animate={shuffle.center}
              exit={shuffle.toBottom}
            >
              {placeholder[index]}
            </motion.div>
          )}
        </AnimatePresence>
      </label>
      <input
        className={styles.input}
        name="searchinput"
        type="text"
        onChange={(e) => setSearchVal(e.target.value)}
        onFocusCapture={() => setIsInputFocused(true)}
        onBlurCapture={() => setIsInputFocused(false)}
      />
    </div>
  );
}
