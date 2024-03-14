"use client";

import store from "@/store";
import { motion } from "framer-motion";
import { SiCisco } from "react-icons/si";
import { useSnapshot } from "valtio";
import Tile from "../(components)/tile/tile";
import global from "../global.module.css";
import styles from "./page.module.css";

export default function Edukacja() {
  useSnapshot(store);
  return (
    <div className={global.wrap}>
      <div className={global.flexwrap}>
        <Tile
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          duration={1}
          delay={0}
        >
          <div className={styles.title}>
            <div>Technik Informatyk</div>
          </div>
          <div className={styles.name}>
            Technikum komunikacji - Zespół Szkół Komunikacji im.&nbsp;Hipolita
            Cegielskiego w&nbsp;Poznaniu
          </div>
          <div className={styles.content}>
            Ukończyłem Technikum&nbsp;z&nbsp;wykształceniem zawodowym jako
            technik informatyk. Rozszerzałem matematykę oraz język angielski. W
            technikum poznałem wiele osób&nbsp;z&nbsp;podobnymi
            zainteresowaniami oraz zapałem do informatyki,&nbsp;z&nbsp;którymi
            przyjaźnię się do dzisiaj.
          </div>
        </Tile>
        {!store.mobile ? (
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className={global.image}
            src="/zsk.jpg"
          ></motion.img>
        ) : (
          ""
        )}
      </div>
      <div className={[global.flexwrap, styles.flexwrapreverse].join(" ")}>
        {!store.mobile ? (
          <Tile
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            duration={1}
            delay={0.3}
            style={{ maxWidth: "350px" }}
          >
            <SiCisco className={styles.ciscologo}></SiCisco>
          </Tile>
        ) : (
          ""
        )}

        <Tile
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          duration={1}
          delay={0.3}
        >
          <div className={styles.title}>
            <div>Cisco IT Essentials</div>
          </div>
          <div className={styles.name}>
            Cisco Networking Academy - Cisco IT Essentials
          </div>
          <div className={styles.contnet}>
            Podczas nauki&nbsp;w&nbsp;technikum postanowiłem podjąć kurs
            Cisco&nbsp;IT&nbsp;Essentials. Kurs ten pozwolił mi poszerzyć swoją
            wiedzę&nbsp;z&nbsp;zakresu hardware&apos;u oraz sieci komputerowych.
          </div>
        </Tile>
      </div>
      <div className={global.flexwrap}>
        <Tile
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          duration={1}
          delay={0.6}
        >
          <div className={styles.title}>
            <div>Bednary Driving City</div>
          </div>
          <div className={styles.name}>
            Szkolenie&nbsp;z&nbsp;zakresu doskonalenia techniki jazdy dla
            kierowców samochodów osobowych stopień&nbsp;I
          </div>
        </Tile>
        {!store.mobile ? (
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={global.image}
            src="/bednary.jpg"
          ></motion.img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
