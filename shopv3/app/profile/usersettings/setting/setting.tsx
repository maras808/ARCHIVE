"use client";

import styles from "./setting.module.css";
import { motion } from "framer-motion";

import { use, useState } from "react";
import { useTheme } from "next-themes";
import { Fcookie } from "@/components/functions/fcookie";
import { cookies } from "next/headers";

export default function Setting(props) {
  const [state, setState] = useState(false);
  const { theme, setTheme } = useTheme();

  const slidervariants = {
    off: { backgroundColor: "#cfcfcf" },
    on: { backgroundColor: "#279FD9" },
  };

  const ballvariants = {
    off: { x: "0%" },
    on: { x: "100%" },
  };

  const handleSetting = () => {
    setState(!state);
    Fcookie("set", `${props.set}`, !state);

    if (props.set === "darkmode") {
      Fcookie("get", `${props.set}`).then((p) => {
        console.log(p);
        if (p === "true") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      });
    }
  };

  return (
    <div className={styles.setting}>
      <div className={styles.title}>{props.text}</div>
      <div className={styles.set}>
        <div className={styles.checkbox}>
          <motion.div
            className={styles.slider}
            onClick={() => {
              handleSetting();
            }}
            variants={slidervariants}
            initial={{ backgroundColor: "#cfcfcf" }}
            animate={state ? "on" : "off"}
          >
            <motion.div
              variants={ballvariants}
              className={styles.ball}
              initial={{ x: 0 }}
              animate={state ? "on" : "off"}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
