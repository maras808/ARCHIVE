"use client";

import {
  MaterialSymbolsRocketLaunchRounded,
  MaterialSymbolsSmartphone,
  PhHouseSimpleFill,
} from "@/icones/icones";
import styles from "./menu.module.css";
import Link from "next/link";
import Bubble, { BubblePropsEnum } from "../bubble/bubble";
import { fade } from "@/animations/animations";
import DarkMode from "../darkmode/darkmode";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} href={"/"}>
        <PhHouseSimpleFill className={styles.home}></PhHouseSimpleFill>
        <Bubble animation={fade} orientation={{ top: BubblePropsEnum.p120 }}>
          Home
        </Bubble>
      </Link>
      <Link className={styles.link} href={"/explore"}>
        <MaterialSymbolsRocketLaunchRounded
          className={styles.explore}
        ></MaterialSymbolsRocketLaunchRounded>
        <Bubble animation={fade} orientation={{ top: BubblePropsEnum.p120 }}>
          Eksploruj
        </Bubble>
      </Link>
      <Link className={styles.link} href={"/contact"}>
        <MaterialSymbolsSmartphone
          className={styles.contact}
        ></MaterialSymbolsSmartphone>
        <Bubble animation={fade} orientation={{ top: BubblePropsEnum.p120 }}>
          Kontakt
        </Bubble>
      </Link>
      {/* <div className={styles.darkmode}>
        <DarkMode></DarkMode>
      </div> */}
    </div>
  );
}
