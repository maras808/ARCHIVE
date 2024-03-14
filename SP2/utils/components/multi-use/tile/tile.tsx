"use client";

import { onHoverBlur } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from "./tile.module.css";

interface tileProps {
  title: string;
  src: string;
  link: string;
}

export default function Tile({ title, src, link }: tileProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className={styles.tile}>
      <Link
        href={`/uslugi/${link}`}
        className={styles.title}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </Link>
      <motion.img
        className={styles.background}
        src={src}
        alt=""
        initial={onHoverBlur.initial}
        animate={isHovered ? onHoverBlur.onHover : onHoverBlur.initial}
        transition={onHoverBlur.transition}
      />
    </div>
  );
}
