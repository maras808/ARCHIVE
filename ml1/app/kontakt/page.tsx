"use client";

import Tile from "../(components)/tile/tile";
import global from "../global.module.css";
import styles from "./page.module.css";

import { AiFillPhone } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Kontakt() {
  return (
    <div className={global.wrap}>
      <div className={global.flexwrap}>
        <Tile
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={1}
          delay={0}
          style={{ flexDirection: "row" }}
        >
          <a className={styles.contact} href="tel:516-976-599">
            <AiFillPhone className={global.phone}></AiFillPhone>
            <div>516-976-599</div>
          </a>
        </Tile>
        <Tile
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={1}
          delay={0.3}
          style={{ flexDirection: "row", minWidth: "400px" }}
        >
          <a
            className={styles.contact}
            href="mailto: mareklawniczak02@gmail.com"
          >
            <MdEmail className={global.mail}></MdEmail>
            <div>mareklawniczak02@gmail.com</div>
          </a>
        </Tile>
        <Tile
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={1}
          delay={0.6}
          style={{ flexDirection: "row" }}
        >
          <a
            className={styles.contact}
            href="https://www.facebook.com/lawniczakmarek"
          >
            <BsMessenger className={global.messanger}></BsMessenger>
            <div>Marek Ławniczak</div>
          </a>
        </Tile>
      </div>
    </div>
  );
}
