"use client";

import { MaterialSymbolsLightArrowBackIosNewRounded } from "@utils/icones";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styles from "./carousel.module.css";
import { RefObject, useEffect, useState } from "react";
import { fadeImage } from "@utils/animations";
import CarouselSection from "./carouselsection/carouselsection";

interface carouselProps {
  renderButtons: boolean;
  renderNavigation: boolean;
  images: any;
  scrollref: RefObject<any>;
}

export default function Carousel({
  renderButtons,
  renderNavigation,
  images,
  scrollref,
}: carouselProps) {
  const [index, setIndex] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);

  const delay = 10000;

  function purifyIndex(index: number, action: "next" | "prev") {
    action === "next" ? index++ : index--;
    if (index === images.at(-1).index + 1) {
      return images.at(0).index;
    }
    if (index === images.at(0).index - 1) {
      return images.at(-1).index;
    }
    return index;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!clicked) {
        setIndex(purifyIndex(index, "next"));
      } else {
        clearInterval(interval);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [[], [clicked]]);

  return (
    <div className={styles.carousel}>
      <div className={styles.content}>
        <div className={styles.bgcolor}></div>
        <AnimatePresence initial={false}>
          {images.map((el: any) => {
            return (
              <motion.img
                className={styles.background}
                src={el.url}
                initial={el.index === 0 ? fadeImage.initial : fadeImage.animate}
                animate={
                  el.index === index ? fadeImage.animate : fadeImage.initial
                }
                exit={fadeImage.initial}
                transition={fadeImage.transition}
                key={el.index}
              ></motion.img>
            );
          })}
        </AnimatePresence>
        {renderButtons ? (
          <>
            <div className={`${styles.button} ${styles.left}`}>
              <div
                className={styles.wrapper}
                onClick={() => {
                  setIndex(purifyIndex(index, "prev"));
                  setClicked(true);
                }}
              >
                <MaterialSymbolsLightArrowBackIosNewRounded></MaterialSymbolsLightArrowBackIosNewRounded>
              </div>
            </div>
            <div className={`${styles.button} ${styles.right}`}>
              <div
                className={styles.wrapper}
                onClick={() => {
                  setIndex(purifyIndex(index, "next"));
                  setClicked(true);
                }}
              >
                <MaterialSymbolsLightArrowBackIosNewRounded></MaterialSymbolsLightArrowBackIosNewRounded>
              </div>
            </div>
          </>
        ) : null}
        {renderNavigation ? (
          <div className={styles.navigation}>
            {images.map((el: any) => {
              const [scope, resetAnimation] = useAnimate();
              const from = useMotionValue<number>(0);
              const scaleX = useTransform(from, (v) => v.toFixed(2));
              const activeElement = {
                initial: {
                  backgroundColor: "#ffffff",
                },
                animate: {
                  backgroundColor: "#28ADD1",
                },
                transition: {
                  type: "tween",
                  ease: "linear",
                  duration: 1,
                },
              };
              useEffect(() => {
                if (!clicked) {
                  if (el.index === index) {
                    animate(from, 1, {
                      type: "tween",
                      ease: "linear",
                      duration: delay / 1000,
                    });
                  } else {
                    resetAnimation(
                      scope.current,
                      {
                        opacity: 0,
                      },
                      {
                        duration: 1,
                      }
                    ).then(() => {
                      from.stop();
                      from.set(0);
                      resetAnimation(scope.current, {
                        opacity: 1,
                      });
                    });
                  }
                } else {
                  resetAnimation(
                    scope.current,
                    {
                      opacity: 0,
                    },
                    {
                      duration: 1,
                    }
                  ).then(() => {
                    from.stop();
                    from.set(0);
                    resetAnimation(scope.current, {
                      opacity: 1,
                    });
                  });
                }
              }, [[], index]);

              return (
                <motion.div
                  className={styles.navigationelement}
                  key={el.index}
                  onClick={() => {
                    setIndex(el.index);
                    setClicked(true);
                  }}
                  initial={activeElement.initial}
                  animate={
                    el.index === index && clicked
                      ? activeElement.animate
                      : activeElement.initial
                  }
                  transition={activeElement.transition}
                >
                  <motion.div
                    className={styles.progressbar}
                    style={{ scaleX }}
                    ref={scope}
                  ></motion.div>
                </motion.div>
              );
            })}
          </div>
        ) : null}
        <div className={styles.preventbluronbottom}></div>
        <div className={styles.preventblurontop}></div>
        <CarouselSection scrollref={scrollref}></CarouselSection>
      </div>
    </div>
  );
}
