"use client";

import Link from "next/link";
import styles from "./custombutton.module.css";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface customButtonProps {
  children: ReactNode;
  animation?: {
    [key: string]: any;
  };
}

export default function CustomButton({
  children,
  animation,
}: customButtonProps) {
  return (
    <motion.div
      initial={animation?.initial}
      whileHover={animation?.hover}
      whileTap={animation?.tap}
      transition={animation?.transition}
      className={styles.button}
    >
      <Link href={"/explore"}>{children}</Link>
    </motion.div>
  );
}
