"use client";

import { motion } from "framer-motion";
import CustomButton from "../../multi-use/custombutton/custombutton";
import styles from "./mission.module.css";
import { join } from "@/utils/animations";

interface missionProps {
  title: string;
  content: string;
  refa: any;
}

export default function Mission({ title, content, refa }: missionProps) {
  return (
    <motion.div
      className={styles.mission}
      ref={refa}
      variants={join.stagger}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className={styles.title}
        variants={join.item.fromBottom.spring}
        transition={join.item.fromBottom.spring.transition}
      >
        {title}
      </motion.div>
      <motion.div
        variants={join.item.fromBottom.spring}
        transition={join.item.fromBottom.spring.transition}
        className={styles.content}
      >
        {content}
      </motion.div>
      <motion.div
        variants={join.item.fromBottom.spring}
        transition={join.item.fromBottom.spring.transition}
        className={styles.button}
      >
        <CustomButton
          type={"secondary"}
          text="Zobacz nasze usługi"
          src="/uslugi"
        ></CustomButton>
      </motion.div>
    </motion.div>
  );
}
