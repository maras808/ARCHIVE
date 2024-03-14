"use client";

import globals from "../../app/globals.module.css";
import styles from "./banner.module.css";

import { useSnapshot } from "valtio";

import store from "@/stores/store";

export default function Banner() {
  useSnapshot(store);

  return (
    <div className={styles.banner}>
      <div className={globals.widthwrapper}>{/* <Swipe></Swipe> */}</div>
    </div>
  );
}
