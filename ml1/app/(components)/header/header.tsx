"use client";

import links from "../../../json/pages.json";
import { BsCpu } from "react-icons/bs";
import styles from "./header.module.css";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import store from "@/store";
import Navbarbig from "./navbarbig";
import NavbarSmall from "./navbarsmall";
import Icons from "../icons/icons";

export default function Header() {
  useSnapshot(store);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= store.mobileWidth) {
        store.mobile = false;
        store.menu = false;
      } else {
        store.mobile = true;
      }
      if (window.innerWidth >= store.smallWidth) {
        store.small = false;
      } else {
        store.small = true;
      }
    });
    if (window.innerWidth >= store.mobileWidth) {
      store.mobile = false;
      store.menu = false;
    } else {
      store.mobile = true;
    }
    if (window.innerWidth >= store.smallWidth) {
      store.small = false;
    } else {
      store.small = true;
    }
  }, []);

  return (
    <header className={styles.header}>
      {!store.small ? <div className={styles.logo}>Marek Ławniczak</div> : ""}

      {store.mobile ? (
        <NavbarSmall links={links}></NavbarSmall>
      ) : (
        <Navbarbig links={links}></Navbarbig>
      )}

      {!store.small ? (
        <div className={styles.right}>
          <Icons></Icons>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
