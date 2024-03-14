"use client";

import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import styles from "./page.module.css";

import CustomButton from "@/components/custombutton/custombutton";
import { exploreButton, fade } from "@/animations/animations";

import aboutme from "@/sources/lottie/person1.json";
import ExploreEntry from "@/components/exploreentry/exploreentry";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.home}>
      <WidthWrapper>
        <div className={styles.content}>
          <ExploreEntry animation={aboutme} id={"aboutme"} loop disableHeight>
            <motion.div
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className={`${styles.section} ${styles.big}`}
            >
              Cześć, mam na imię Marek i jestem z Lubonia.
            </motion.div>
            <motion.div
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={styles.section}
            >
              <div className={styles.text}>
                Od małego interesowałem się informatyką, więc postanowiłem
                połączyć pasję z zawodem. Zawsze lubiłem poszerzać wiedzę
                pozyskaną na zajęciach oraz implementować poznane technologie w
                środowisku domowym.
              </div>
            </motion.div>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className={styles.text}>
                Styczność z informatyką na co dzień spowodowała, że nauczyłem
                się wiele rzeczy z różnych jej dziedzin. Zaczynałem od
                hardware&apos;u, następnie zafascynowało mnie programowanie, a w
                ostatnim czasie wszedłem w świat rozwiązań serwerowych. Po
                drodze zyskałem praktyczną wiedzę w używaniu systemów
                operacyjnych nastawionych na rozwiązania serwerowe, takich jak
                Ubuntu Server, Windows Server, Proxmox czy TrueNAS.
              </div>
            </motion.div>
          </ExploreEntry>
          <div className={styles.desc}>
            <CustomButton animation={exploreButton}>
              Dowiedz się więcej
            </CustomButton>
          </div>
        </div>
      </WidthWrapper>
    </main>
  );
}
