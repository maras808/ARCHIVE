"use client";

import {
  MaterialSymbolsFavoriteRounded,
  SimpleIconsAmazonprime,
} from "../icons/icons";
import { motion } from "framer-motion";
import styles from "./item.module.css";
import { ShadowWithEnlarge } from "../animations/animations";
import Link from "next/link";

export default function Item(props) {
  return (
    <motion.div
      className={styles.item}
      initial={ShadowWithEnlarge.off}
      whileHover={props.enlarge ? ShadowWithEnlarge.on : ShadowWithEnlarge.off}
      style={props.style}
    >
      <div className={styles.tags}>
        <div className={styles.prime}>
          {props.product.prime ? (
            <SimpleIconsAmazonprime></SimpleIconsAmazonprime>
          ) : (
            ""
          )}
        </div>
        <div className={styles.favourite}>
          <MaterialSymbolsFavoriteRounded></MaterialSymbolsFavoriteRounded>
        </div>
      </div>
      <Link href={`product/${props.product.id}`} className={styles.wrapper}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src={`/products/${props.product.image}`}
            alt=""
          />
          <div className={styles.name}>{props.product.name}</div>
        </div>
        <div className={styles.right}>
          {props.long ? (
            <div className={styles.long}>{props.product.long}</div>
          ) : (
            ""
          )}
          {props.short ? (
            <div className={styles.short}>{props.product.short}</div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </motion.div>
  );
}
