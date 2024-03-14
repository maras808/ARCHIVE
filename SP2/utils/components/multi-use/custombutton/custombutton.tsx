"use client";
import styles from "./custombutton.module.css";
import { motion } from "framer-motion";
import { custombutton } from "@/utils/animations";
import Link from "next/link";
import { RefObject } from "react";

interface customButtonProps {
  text: string;
  type: "primary" | "secondary";
  src?: string;
  scroll?: RefObject<any>;
}

export default function CustomButton({
  text,
  type,
  src,
  scroll,
}: customButtonProps) {
  return (
    <motion.div
      className={styles.custombutton}
      initial={
        type === "primary"
          ? custombutton.primary.initial
          : custombutton.secondary.initial
      }
      whileHover={
        type === "primary"
          ? custombutton.primary.onHover
          : custombutton.secondary.onHover
      }
      transition={
        type === "primary"
          ? custombutton.primary.transition
          : custombutton.secondary.transition
      }
    >
      {src && (
        <Link className={styles.link} href={src}>
          {text}
        </Link>
      )}
      {scroll && (
        <div
          className={styles.link}
          onClick={() => {
            scroll?.current.scrollIntoView({ block: "center" });
          }}
        >
          {text}
        </div>
      )}
    </motion.div>
  );
}
