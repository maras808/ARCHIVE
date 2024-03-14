"use client";

import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import styles from "./page.module.css";

import contact from "@/sources/lottie/contact.json";
import LottieAnimation from "@/components/lottieanimation/lottieanimation";

import { motion } from "framer-motion";

import useOnScreen from "@/customhooks/useOnScreen";
import { useRef } from "react";
import {
  LogosMessenger,
  MaterialSymbolsSmartphone,
  MaterialSymbolsMail,
} from "@/icones/icones";
import Link from "next/link";
import { enlarge } from "@/animations/animations";

const data = {
  phone: "516-976-599",
  mail: "mareklawniczak02@gmail.com",
  messenger: "https://www.facebook.com/lawniczakmarek/",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const visable = useOnScreen(ref);
  return (
    <div className={styles.contact}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.desc}>
            <motion.div
              initial={enlarge.off}
              whileHover={enlarge.on}
              className={styles.entry}
            >
              <MaterialSymbolsSmartphone></MaterialSymbolsSmartphone>
              <Link href={`tel:${data.phone}`} className={styles.link}>
                {data.phone}
              </Link>
            </motion.div>
            <motion.div
              initial={enlarge.off}
              whileHover={enlarge.on}
              className={styles.entry}
            >
              <MaterialSymbolsMail></MaterialSymbolsMail>
              <Link href={`mailto:${data.mail}`} className={styles.link}>
                {data.mail}
              </Link>
            </motion.div>
            <motion.div
              initial={enlarge.off}
              whileHover={enlarge.on}
              className={styles.entry}
            >
              <LogosMessenger></LogosMessenger>
              <Link
                href={"https://www.facebook.com/lawniczakmarek/"}
                target={"__blank"}
                className={styles.link}
              >
                Marek Ławniczak
              </Link>
            </motion.div>
          </div>
          <div className={styles.canvas} ref={ref}>
            <LottieAnimation
              animationData={contact}
              loop
              isVisable={visable}
              maxWidth={800}
            ></LottieAnimation>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
