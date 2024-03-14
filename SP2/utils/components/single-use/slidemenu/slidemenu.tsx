"use client";

import {
  MaterialSymbolsCloseRounded,
  MaterialSymbolsFormatListBulleted,
} from "@/utils/icones";
import styles from "./slidemenu.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { fade, openMenu } from "@/utils/animations";
import links from "@utils/links.json";
import Link from "next/link";

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles.button}>
        <MaterialSymbolsFormatListBulleted
          className={styles.buttonw}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></MaterialSymbolsFormatListBulleted>
      </div>
      <motion.div
        className={styles.slidemenu}
        initial={openMenu.initial}
        animate={isOpen ? openMenu.animate : openMenu.initial}
        transition={openMenu.transition}
      >
        <div
          className={styles.closeButton}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MaterialSymbolsCloseRounded></MaterialSymbolsCloseRounded>
        </div>
        {links.map((el) => {
          return (
            <motion.div
              className={styles.link}
              initial={fade.initial}
              whileHover={fade.animate}
              transition={fade.transition}
            >
              <Link
                href={el.href}
                target={el.blank ? "_blank" : "_self"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {el.text}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
