"use client";

import {
  MdiCertificate,
  MdiDocker,
  MdiServer,
  RiComputerFill,
  RiJavascriptFill,
  TablerInfoHexagonFilled,
} from "@/icones/icones";
import Bubble, { BubblePropsEnum } from "../bubble/bubble";
import styles from "./sidenav.module.css";
import { motion } from "framer-motion";
import { comeIn, currentSectionIcon } from "@/animations/animations";

import { useSnapshot } from "valtio";
import store from "@/stores/store";

interface sideNavProps {
  animation?: {
    [key: string]: any;
  };
}

export default function SideNav({ animation }: sideNavProps) {
  const snapshot = useSnapshot(store);
  return (
    <div className={styles.sidenav}>
      <motion.div
        className={styles.entry}
        initial={animation?.off}
        animate={
          snapshot.currentId === "programing"
            ? currentSectionIcon.on
            : currentSectionIcon.off
        }
        whileHover={animation?.on}
        transition={animation?.transition}
      >
        <a className={styles.link} href={"#programing"}>
          <RiJavascriptFill className={styles.js}></RiJavascriptFill>
          <Bubble
            animation={comeIn.right}
            orientation={{ right: BubblePropsEnum.p120 }}
          >
            Programowanie
          </Bubble>
        </a>
      </motion.div>
      <motion.div
        className={styles.entry}
        initial={animation?.off}
        animate={
          snapshot.currentId === "technologies"
            ? currentSectionIcon.on
            : currentSectionIcon.off
        }
        whileHover={animation?.on}
        transition={animation?.transition}
      >
        <a className={styles.link} href={"#technologies"}>
          <MdiDocker className={styles.docker}></MdiDocker>
          <Bubble
            animation={comeIn.right}
            orientation={{ right: BubblePropsEnum.p120 }}
          >
            Technologie
          </Bubble>
        </a>
      </motion.div>
      <motion.div
        className={styles.entry}
        initial={animation?.off}
        animate={
          snapshot.currentId === "computers"
            ? currentSectionIcon.on
            : currentSectionIcon.off
        }
        whileHover={animation?.on}
        transition={animation?.transition}
      >
        <a className={styles.link} href={"#computers"}>
          <RiComputerFill></RiComputerFill>
          <Bubble
            animation={comeIn.right}
            orientation={{ right: BubblePropsEnum.p120 }}
          >
            Znajomość komputera
          </Bubble>
        </a>
      </motion.div>
      <motion.div
        className={styles.entry}
        initial={animation?.off}
        animate={
          snapshot.currentId === "education"
            ? currentSectionIcon.on
            : currentSectionIcon.off
        }
        whileHover={animation?.on}
        transition={animation?.transition}
      >
        <a className={styles.link} href={"#education"}>
          <MdiCertificate></MdiCertificate>
          <Bubble
            animation={comeIn.right}
            orientation={{ right: BubblePropsEnum.p120 }}
          >
            Edukacja
          </Bubble>
        </a>
      </motion.div>
    </div>
  );
}
