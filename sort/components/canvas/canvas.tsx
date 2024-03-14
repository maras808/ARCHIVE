"use client";

import { useEffect } from "react";
import Settings from "../settings/settings";
import Sort from "../sort/sort";
import WidthWrapper from "../widthwrapper/widthwrapper";
import styles from "./canvas.module.css";
import store from "@/app/store/store";
import { useSnapshot } from "valtio";

export default function Canvas() {
  const snap = useSnapshot(store);

  useEffect(() => {
    snap.genArr();
    snap.shuffleArr();
    return () => snap.clearArr();
  }, []);

  return (
    <div className={styles.canvas}>
      <WidthWrapper>
        <div className={styles.content}>
          <Sort arr={snap.sortArr}></Sort>
          <Settings></Settings>
        </div>
      </WidthWrapper>
    </div>
  );
}
