"use client";

import styles from "./page.module.css";
import Tile from "./(components)/tile/tile";
import global from "./global.module.css";
import Parallax from "./(components)/parallax/parallax";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import store from "@/store";

export default function Home() {
  useSnapshot(store);
  return (
    <>
      <Parallax
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        duration={1}
        delay={0}
      ></Parallax>
      <div className={global.wrap}>
        <Tile
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          duration={1}
          delay={0}
        >
          Cześć, mam na imię Marek&nbsp;i&nbsp;jestem&nbsp;z&nbsp;Lubonia.
          Od&nbsp;małego interesowałem się informatyką, więc postanowiłem
          połączyć pasję&nbsp;z&nbsp;zawodem. Zawsze lubiłem poszerzać wiedzę
          pozyskaną&nbsp;na&nbsp;zajęciach oraz implementować poznane
          technologie w środowisku domowym. Na&nbsp;początku
          używałem&nbsp;do&nbsp;tego celu maszyn
          wirtualnych&nbsp;na&nbsp;komputerze osobistym,
          ale&nbsp;ze&nbsp;względu &nbsp;a ograniczenia tego rozwiązania
          zacząłem używać osobnego sprzętu oraz technologii konteneryzacji.
        </Tile>
        <div className={global.flexwrap}>
          <Tile
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            duration={1}
            delay={0.5}
          >
            Styczność&nbsp;z informatyką na co dzień spowodowała, że nauczyłem
            się wiele rzeczy&nbsp;z&nbsp;różnych jej dziedzin. Zaczynałem od
            hardware&apos;u,&nbsp;następnie zafascynowało mnie programowanie,
            a&nbsp;w ostatnim czasie wszedłem&nbsp;w&nbsp;świat rozwiązań
            serwerowych. Po drodze zyskałem praktyczną
            wiedzę&nbsp;w&nbsp;używaniu systemów operacyjnych nastawionych na
            rozwiązania serwerowe, takich jak Ubuntu&nbsp;Server,
            Windows&nbsp;Server, Proxmox czy TrueNAS. W mniejszym stopniu
            zahaczyłem również o grafikę&nbsp;3D&nbsp;oraz&nbsp;2D
            i&nbsp;modelowanie&nbsp;3D
          </Tile>
          {!store.mobile ? (
            <motion.img
              src="/m1.jpg"
              className={global.image}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ maxWidth: "500px" }}
            ></motion.img>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
