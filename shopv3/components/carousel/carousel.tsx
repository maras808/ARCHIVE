"use client";

import { useEffect, useState } from "react";
import styles from "./carousel.module.css";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import { AnimatePresence, motion } from "framer-motion";

export default function Carousel(props) {
  const [index, setIndex] = useState(1);
  const [slideChanged, setSlideChanged] = useState(false);

  // useEffect(() => { maybe causing overhydration err
  //   if (!slideChanged) {
  //     setTimeout(() => {
  //       handleButton("next");
  //     }, props.delay);
  //   }
  // }, [index]);

  function handleButton(arg: string) {
    if (arg === "next" && index !== props.imgs.at(-1).index) {
      setIndex(index + 1);
    }
    if (arg === "prev" && index !== props.imgs.at(0).index) {
      setIndex(index - 1);
    }
    if (arg === "next" && index === props.imgs.at(-1).index) {
      setIndex(props.imgs.at(0).index);
    }
    if (arg === "prev" && index === props.imgs.at(0).index) {
      setIndex(props.imgs.at(-1).index);
    }
  }

  function handleNavigator(arg: number) {
    setIndex(arg);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {props.renderButtons ? (
          <>
            <button
              onClick={() => {
                handleButton("prev");
                setSlideChanged(true);
              }}
              className={styles.prev}
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </button>
            <button
              onClick={() => {
                handleButton("next");
                setSlideChanged(true);
              }}
              className={styles.next}
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </>
        ) : (
          ""
        )}
        <ul>
          <AnimatePresence>
            {props.imgs.map((el) => {
              return (
                <motion.li
                  key={el.index}
                  initial={{ opacity: el.index === 1 ? 1 : 0 }}
                  animate={{ opacity: index == el.index ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className={styles.slide}
                >
                  <img src={el.url} alt="err" />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
      {props.renderNavigator ? (
        <div className={styles.navigator}>
          {props.imgs.map((el) => {
            return (
              <div
                key={el.index}
                onClick={() => {
                  handleNavigator(el.index);
                  setSlideChanged(true);
                }}
                className={[
                  styles.navigatoritem,
                  index === el.index ? styles.active : "",
                ].join(" ")}
              >
                {el.desc}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
