"use client";

import store from "@/store";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import Tile from "../(components)/tile/tile";
import global from "../global.module.css";
import styles from "./page.module.css";

export default function Umiejetnosci() {
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
            <div>Hardware</div>
          </div>
          <div className={styles.content}>
            Hardware zapoczątkował moją przygodę&nbsp;z informatyką. Zaczynałem
            od nowinek technologicznych, po składanie oraz naprawienie
            komputerów znajomym&nbsp;i rodzinie, kończąc na
            zainteresowaniu&nbsp;w technologiach serwerowych.
          </div>
        </Tile>
        {!store.mobile ? (
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={global.image}
            src="/u1.jpg"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.flexwrapreverse}>
        {!store.mobile ? (
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={global.image}
            src="/u2.jpg"
            alt=""
          />
        ) : (
          ""
        )}

        <Tile
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          duration={1}
          delay={0.4}
        >
          <div className={styles.title}>
            <div>Software</div>
          </div>
          <div className={styles.content}>
            W świat programowania witryn internetowych wprowadził mnie
            jeden&nbsp;z przedmiotów zawodowych w technikum. Bardzo polubiłem
            ten przedmiot, ale był on nastawiony na poznanie technologii HTML,
            CSS oraz JavaScript&nbsp;w podstawowej formie, która nie nadawała
            się na zastosowanie poza nauką. Postanowiłem poszerzyć swoją
            wiedzę&nbsp;na ten temat&nbsp;i dlatego moje praktyki zawodowe były
            nastawione na programowanie przy użyciu framework&apos;u Angular,
            który&nbsp;mi&nbsp;się&nbsp;nie&nbsp;spodobał. Spróbowałem swoich
            sił w React, który bardziej przypadł mi do gustu. Obecnie używam
            technologii NextJS&nbsp;13
          </div>
        </Tile>
      </div>
      <div className={global.flexwrap}>
        <Tile
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          duration={1}
          delay={0.8}
        >
          <div className={styles.title}>
            <div>Rozwiązania serwerowe</div>
          </div>
          <div className={styles.content}>
            Wprowadzenie&nbsp;w rozwiązania serwerowe było w moim przypadku
            nieuniknione, ponieważ potrzebowałem scentralizowanego oraz
            niezawodnego miejsca na przechowywanie znacznej ilości danych. Po
            zagłębieniu się&nbsp;w temat zacząłem również samodzielnie hostować
            niektóre usługi na własne potrzeby jak&nbsp;m.in.
            własna&nbsp;chmura. Używam&nbsp;do tego celu systemu TrueNAS Scale
            na serwerze Dell&nbsp;PowerEdge&nbsp;R410
          </div>
        </Tile>
        {!store.mobile ? (
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={global.image}
            src="/u3.jpg"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
