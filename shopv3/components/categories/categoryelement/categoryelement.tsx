"use client";

import { useState } from "react";

import styles from "./categoryelement.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { DynamicIcon } from "@/components/functions/dynamicicon";
import CategoryItem from "./categoryitem/categoryitem";

export default function CategoryElement(props) {
  const [dropdown, setDropdown] = useState(false);

  const boxVariant = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };
  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div
        className={styles.categoryelement}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        key={props.category + props.icon}
        // onClick={() => setDropdown(!dropdown)} OPTIMAZIE FOR MOBILE
      >
        <div className={styles.icon}>
          <DynamicIcon name={props.icon}></DynamicIcon>
        </div>
        <div className={styles.name}>{props.category}</div>
      </div>
      <AnimatePresence>
        {dropdown ? (
          <motion.div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            key={"dropdown"}
            className={styles.dropdown}
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            {props.subcategories.map((el) => {
              return (
                <motion.div className={styles.block} variants={listVariant}>
                  <div className={styles.desc}>{el.type}</div>
                  <div className={styles.content}>
                    {el.entries.map((el) => {
                      return (
                        <CategoryItem
                          link={el.name}
                          key={el.name}
                          categoryname={el.name}
                          icon={el.icon}
                        ></CategoryItem>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
