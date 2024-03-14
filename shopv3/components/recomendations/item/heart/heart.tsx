"use client";

import styles from "./heart.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineLaptop, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Heart(props) {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const [randomSize, setRandomSize] = useState(0);
  const [randomAngle, setRandomAngle] = useState(0);

  const maxAngle = 30;
  const minAngle = -30;
  const maxSize = 2.2;
  const minSize = 1.5;

  const handleAnimation = () => {
    setAnimationTrigger(!animationTrigger);
    setRandomAngle(
      Number((Math.random() * (maxAngle - minAngle) + minAngle).toFixed(2))
    );
    setRandomSize(
      Number((Math.random() * (maxSize - minSize) + minSize).toFixed(2))
    );
  };

  const variants = {
    stale: {
      color: "rgb(0, 0, 0)",
    },
    animate: {
      y: [0, -10, 0],
      x: [0, -5, 0],
      rotate: [0, randomAngle, 0],
      fontSize: ["1.3rem", randomSize + "rem", "1.3rem"],
      color: [
        "rgb(0, 0, 0)",
        "rgb(212, 66, 245)",
        "rgb(66, 203, 245)",
        "rgb(81, 245, 66)",
        "rgb(245, 224, 66)",
        "rgb(245, 66, 66)",
      ],
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        className={[styles.heart, props.topleft ? styles.topleft : ""].join(
          " "
        )}
        onClick={() => handleAnimation()}
        variants={variants}
        initial={{ x: 0, y: 0, color: "rgb(0,0,0)" }}
        animate={animationTrigger ? "animate" : "stale"}
        transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1] }}
      >
        {animationTrigger ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"heart1"}
          >
            <AiFillHeart></AiFillHeart>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"heart2"}
          >
            <AiOutlineHeart></AiOutlineHeart>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
