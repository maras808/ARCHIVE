"use client";

import styles from "./menu.module.css";
import Icon from "../icon/icon";
import Link from "next/link";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import store from "@/stores/store";

export default function Menu(props) {
  const [rednerCart, setRenderCart] = useState(false);
  const [rednerFavourites, setRenderFavourites] = useState(false);
  const [rednerProfile, setRenderProfile] = useState(false);
  const [rednerSettings, setRenderSettings] = useState(false);
  const [rednerAboutUs, setRenderAboutUs] = useState(false);

  useSnapshot(store);

  return (
    <div className={styles.menu}>
      <Link
        onMouseEnter={() => setRenderCart(true)}
        onMouseLeave={() => setRenderCart(false)}
        className={styles.link}
        href="/cart"
      >
        <Icon desc="Cart">
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </Icon>
        {rednerCart ? (
          <motion.div
            className={styles.menudropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        ) : (
          ""
        )}
      </Link>
      <Link
        onMouseEnter={() => setRenderFavourites(true)}
        onMouseLeave={() => setRenderFavourites(false)}
        className={styles.link}
        href="/favourites"
      >
        <Icon desc="Favourites">
          <AiOutlineHeart></AiOutlineHeart>
        </Icon>
        {rednerFavourites ? (
          <motion.div
            className={styles.menudropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        ) : (
          ""
        )}
      </Link>
      <hr></hr>
      <Link
        onMouseEnter={() => setRenderProfile(true)}
        onMouseLeave={() => setRenderProfile(false)}
        className={styles.link}
        href="/profile"
      >
        <Icon desc="Profile">
          <AiOutlineUser></AiOutlineUser>
        </Icon>
        {rednerProfile ? (
          <motion.div
            className={styles.menudropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        ) : (
          ""
        )}
      </Link>
      <Link
        onMouseEnter={() => setRenderSettings(true)}
        onMouseLeave={() => setRenderSettings(false)}
        className={styles.link}
        href="/settings"
      >
        <Icon desc="Settings">
          <AiOutlineSetting></AiOutlineSetting>
        </Icon>
        {rednerSettings ? (
          <motion.div
            className={styles.menudropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        ) : (
          ""
        )}
      </Link>
      <Link
        onMouseEnter={() => setRenderAboutUs(true)}
        onMouseLeave={() => setRenderAboutUs(false)}
        className={styles.link}
        href="/about-us"
      >
        <Icon desc="About us">
          <AiOutlineInfoCircle></AiOutlineInfoCircle>
        </Icon>
        {rednerAboutUs ? (
          <motion.div
            className={styles.menudropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}
