"use client";

import { textHover } from "@utils/animations";
import styles from "./customlink.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { RefObject } from "react";

interface customLinkProps {
  text: string;
  link?: string;
  scrollToRef?: RefObject<any>;
  type: "fromBlack" | "fromWhite";
}

export default function CustomLink({
  text,
  link,
  scrollToRef,
  type,
}: customLinkProps) {
  return (
    <div>
      {link ? (
        <Link className={styles.wrapper} href={`/${link}`}>
          <motion.div
            className={styles.customlink}
            initial={
              type === "fromBlack" ? textHover.fromBlack : textHover.fromWhite
            }
            whileHover={textHover.animate}
            transition={textHover.transition}
          >
            {text}
          </motion.div>
        </Link>
      ) : null}
      {scrollToRef ? (
        <motion.div
          className={styles.customlink}
          initial={
            type === "fromBlack" ? textHover.fromBlack : textHover.fromWhite
          }
          whileHover={textHover.animate}
          transition={textHover.transition}
          onClick={() => scrollToRef.current.scrollIntoView({ block: "start" })}
        >
          {text}
        </motion.div>
      ) : null}
    </div>
  );
}
