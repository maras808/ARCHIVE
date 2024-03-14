"use client";

import styles from "./header.module.css";
import globals from "../../app/globals.module.css";

import Logo from "./logo";
import Search from "./search";
import Favourites from "../icons/favourites";
import Cart from "../icons/cart";
import Account from "../icons/account";
import Settings from "../icons/settings";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import mainStore from "@/store/store";

export default function Header() {
  useSnapshot(mainStore);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= mainStore.isSmallWidth) {
        mainStore.isSmall = true;
      } else {
        mainStore.isSmall = false;
      }
    });
    if (window.innerWidth <= mainStore.isSmallWidth) {
      mainStore.isSmall = true;
    } else {
      mainStore.isSmall = false;
    }
  }, []);

  return !mainStore.isSmall ? (
    <header className={styles.header}>
      <div className={globals.widthwrapper}>
        <div className={styles.leftsection}>
          <Logo></Logo>
          <Search></Search>
        </div>
        <div className={styles.rightsection}>
          <div className={styles.buying}>
            <Favourites>Favourites</Favourites>
            <Cart>Cart</Cart>
          </div>
          <div className={styles.user}>
            <Account>Account</Account>
            <Settings>Settings</Settings>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header className={styles.smallheader}>
      <div className={styles.top}>
        <Logo></Logo>
        <div className={styles.smallrightsection}>
          <div className={styles.buying}>
            <Favourites>Favourites</Favourites>
            <Cart>Cart</Cart>
          </div>
          <div className={styles.user}>
            <Account>Account</Account>
            <Settings>Settings</Settings>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Search></Search>
      </div>
    </header>
  );
}
