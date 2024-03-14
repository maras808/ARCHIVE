"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./parallax.module.css";

export default function Parallax(props: any) {
  // const parallaxref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   offset: ["start start", "end start"],
  //   target: parallaxref,
  // });
  // let parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  // let parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  // let parallax3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // let parallax4 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // let parallax5 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  let { scrollY } = useScroll();
  const scrollAmount = 600;
  let parallax1 = useTransform(scrollY, [0, scrollAmount], ["0%", "80%"]);
  let parallax2 = useTransform(scrollY, [0, scrollAmount], ["0%", "60%"]);
  let parallax3 = useTransform(scrollY, [0, scrollAmount], ["0%", "40%"]);
  let parallax4 = useTransform(scrollY, [0, scrollAmount], ["0%", "20%"]);
  let parallax5 = useTransform(scrollY, [0, scrollAmount], ["0%", "0%"]);

  return (
    <motion.div
      initial={props.initial}
      whileInView={props.whileInView}
      transition={{ duration: props.duration }}
      className={styles.parallax}
      // ref={parallaxref}
    >
      <div className={styles.backdrop}></div>
      <svg
        id="visual"
        viewBox="0 0 1920 600"
        width="1920"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <motion.path
          style={{ y: parallax1 }}
          d="M0 73L80 76C160 79 320 85 480 79C640 73 800 55 960 47C1120 39 1280 41 1440 46C1600 51 1760 59 1840 63L1920 67L1920 0L1840 0C1760 0 1600 0 1440 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0L0 0Z"
          fill="#161314"
        ></motion.path>
        <motion.path
          style={{ y: parallax2 }}
          d="M0 253L80 245C160 237 320 221 480 201C640 181 800 157 960 162C1120 167 1280 201 1440 211C1600 221 1760 207 1840 200L1920 193L1920 65L1840 61C1760 57 1600 49 1440 44C1280 39 1120 37 960 45C800 53 640 71 480 77C320 83 160 77 80 74L0 71Z"
          fill="#354d6d"
        ></motion.path>
        <motion.path
          style={{ y: parallax3 }}
          d="M0 451L80 449C160 447 320 443 480 425C640 407 800 375 960 376C1120 377 1280 411 1440 435C1600 459 1760 473 1840 480L1920 487L1920 191L1840 198C1760 205 1600 219 1440 209C1280 199 1120 165 960 160C800 155 640 179 480 199C320 219 160 235 80 243L0 251Z"
          fill="#3d5a80"
        ></motion.path>
        <motion.path
          style={{ y: parallax4 }}
          d="M0 535L80 538C160 541 320 547 480 539C640 531 800 509 960 509C1120 509 1280 531 1440 542C1600 553 1760 553 1840 553L1920 553L1920 485L1840 478C1760 471 1600 457 1440 433C1280 409 1120 375 960 374C800 373 640 405 480 423C320 441 160 445 80 447L0 449Z"
          fill="#2f4158"
        ></motion.path>
        <motion.path
          style={{ y: parallax5 }}
          d="M0 601L80 601C160 601 320 601 480 601C640 601 800 601 960 601C1120 601 1280 601 1440 601C1600 601 1760 601 1840 601L1920 601L1920 551L1840 551C1760 551 1600 551 1440 540C1280 529 1120 507 960 507C800 507 640 529 480 537C320 545 160 539 80 536L0 533Z"
          fill="#161314"
        ></motion.path>
      </svg>
      <div className={styles.parallaxtext}>Rozwijajmy się razem</div>
    </motion.div>
  );
}
