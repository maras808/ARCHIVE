"use client";

import Logo from "@multiuse/logo/logo";
import Navbar from "./navbar/navbar";
import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import SlideMenu from "../slidemenu/slidemenu";

export default function Header() {
  const [navState, setNavState] = useState<"init" | "wide" | "short">("init");

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 768 ? setNavState("short") : setNavState("wide");
    });
    window.innerWidth <= 768 ? setNavState("short") : setNavState("wide");
  }, []);

  return (
    <header className={styles.header}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.logomar}>
            <Logo></Logo>
          </div>
          {navState === "init" ? null : null}
          {navState === "wide" ? <Navbar></Navbar> : null}
          {navState === "short" ? <SlideMenu></SlideMenu> : null}
        </div>
      </WidthWrapper>
    </header>
  );
}
