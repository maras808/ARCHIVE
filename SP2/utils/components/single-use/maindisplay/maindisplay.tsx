"use client";

import CustomButton from "../../multi-use/custombutton/custombutton";
import styles from "./maindisplay.module.css";
import { motion } from "framer-motion";
import { join } from "@/utils/animations";

interface mainDisplayProps {
  primaryText: string;
  secondaryText: string;
  refa: any;
}

export default function MainDisplay({
  primaryText,
  secondaryText,
  refa,
}: mainDisplayProps) {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.maindisplay}
        variants={join.stagger}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className={styles.primary}
          variants={join.item.fromLeft.spring}
          transition={join.item.fromLeft.spring.transition}
        >
          {primaryText}
        </motion.div>
        <motion.div
          className={styles.secondary}
          variants={join.item.fromLeft.spring}
          transition={join.item.fromLeft.spring.transition}
        >
          {secondaryText}
        </motion.div>
        <motion.div
          variants={join.item.fromLeft.spring}
          transition={join.item.fromLeft.spring.transition}
        >
          <CustomButton
            type={"primary"}
            text={"Dowiedz się więcej"}
            scroll={refa}
          ></CustomButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
