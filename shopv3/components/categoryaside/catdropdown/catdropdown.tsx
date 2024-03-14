"use client";

import styles from "./catdropdown.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiDownArrow } from "react-icons/bi";

export default function CatDropdown(props) {
  const [renderDropdown, setRenderDropdown] = useState(false);
  useEffect(() => {
    setRenderDropdown(false);
  }, [props.trigger]);
  const boxVariant = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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
    <div className={styles.category} key={props.category}>
      <div
        className={styles.categoryname}
        onClick={() => {
          setRenderDropdown(!renderDropdown);
        }}
      >
        {props.category.category}
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={
            renderDropdown
              ? {
                  rotate: "180deg",
                  transition: { delay: 0, ease: "easeInOut" },
                }
              : {
                  rotate: "0deg",
                  transition: { delay: 0.5, ease: "easeInOut" },
                }
          }
          className={styles.arrow}
        >
          <BiDownArrow></BiDownArrow>
        </motion.div>
      </div>
      <AnimatePresence>
        {renderDropdown ? (
          <motion.div
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            exit="hidden"
            key={props.category.category}
            className={styles.subcategoriestypelist}
          >
            {props.category.subcategories.map((subcategorytype) => {
              return (
                <motion.div
                  variants={listVariant}
                  className={styles.subcategorytypewrapper}
                >
                  <div className={styles.subcategorytype}>
                    {subcategorytype.type}
                  </div>
                  <div className={styles.truesubs}>
                    {subcategorytype.entries.map((entry) => {
                      return (
                        <div className={styles.truesubentry}>
                          <Link href={"/products/category/" + entry.name}>
                            {entry.name}
                          </Link>
                        </div>
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
    </div>
  );
}
