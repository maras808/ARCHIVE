"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./optionstripentry.module.css";
import {
  Rotate,
  StaggerChildren,
  TextShadowAnimation,
} from "../animations/animations";
import { MaterialSymbolsArrowBackIosNew } from "../icons/icons";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import optionsstripdropdown from "@/stores/optionstripdropdown";
import Item from "../item/item";
import WidthWrapper from "../widthwrapper/widthwrapper";

export default function OptionStripEntry(props) {
  useSnapshot(optionsstripdropdown);
  const [rotateArrow, setRotateArrow] = useState(false);
  useEffect(() => {
    setRotateArrow(false);
  }, [optionsstripdropdown.resetArr]);
  useEffect(() => {
    if (optionsstripdropdown.isOn === false) {
      optionsstripdropdown.resetArr = !optionsstripdropdown.resetArr;
    }
  }, [optionsstripdropdown.isOn]);
  useEffect(() => {
    console.log(props.products);
  }, []);
  return (
    <motion.div
      whileHover={TextShadowAnimation.on}
      initial={TextShadowAnimation.off}
      className={styles.entry}
      onClick={() => {
        setTimeout(() => {
          setRotateArrow(true);
        }, 100);
        optionsstripdropdown.resetArr = !optionsstripdropdown.resetArr;
        optionsstripdropdown.isOn = true;
        optionsstripdropdown.payload.filter = props.filter;
      }}
      onMouseLeave={() => {
        optionsstripdropdown.isOn = false;
      }}
    >
      <div className={styles.text}>{props.text}</div>
      <motion.div
        className={styles.arrow}
        initial={Rotate.off}
        animate={rotateArrow ? Rotate.on : Rotate.off}
      >
        <MaterialSymbolsArrowBackIosNew></MaterialSymbolsArrowBackIosNew>
      </motion.div>
      <AnimatePresence>
        {optionsstripdropdown.isOn ? (
          <motion.div
            variants={StaggerChildren.parent}
            animate="on"
            initial="off"
            exit="off"
            key={"optionstripdropdown"}
            className={styles.optionstripdropdown}
            onMouseEnter={() => {
              optionsstripdropdown.isOn = true;
            }}
            onMouseLeave={() => {
              optionsstripdropdown.isOn = false;
            }}
          >
            <WidthWrapper>
              <motion.div
                className={styles.content}
                variants={StaggerChildren.children}
              >
                {props.products.map((product) => {
                  return <Item product={product}></Item>;
                })}
              </motion.div>
            </WidthWrapper>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </motion.div>
  );
}
