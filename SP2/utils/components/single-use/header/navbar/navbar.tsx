"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { motion } from "framer-motion";
import { fade } from "@/utils/animations";
import links from "@utils/links.json";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {links.map((el) => {
        return (
          <motion.div
            className={styles.link}
            initial={fade.initial}
            whileHover={fade.animate}
            transition={fade.transition}
          >
            <Link href={el.href} target={el.blank ? "_blank" : "_self"}>
              {el.text}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
