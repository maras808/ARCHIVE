"use client";

import store from "@/stores/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import globals from "../../app/globals.module.css";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import Search from "../search/search";
import styles from "./header.module.css";

export default function Header() {
  const readstore = useSnapshot(store);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= store.isSmallWidth) {
        store.isSmall = true;
      } else {
        store.isSmall = false;
      }
    });
    if (window.innerWidth <= store.isSmallWidth) {
      store.isSmall = true;
    } else {
      store.isSmall = false;
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={[globals.widthwrapper, styles.flexwrapper].join(" ")}>
        {readstore.isSmall ? (
          <>
            <Logo></Logo>
            <Search></Search>
            <Menu></Menu>
          </>
        ) : (
          <div className={globals.flexdir}>
            <div className={styles.top}>
              <Logo></Logo>
              <Menu></Menu>
            </div>
            <div className={styles.mobilesearch}>
              <Search></Search>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
