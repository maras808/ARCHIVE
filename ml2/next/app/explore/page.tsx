"use client";

import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import styles from "./page.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import ExploreEntry from "@/components/exploreentry/exploreentry";

import programing from "@/sources/lottie/react.json";
import technologies from "@/sources/lottie/tech.json";
import computers from "@/sources/lottie/laptop.json";
import servers from "@/sources/lottie/server.json";
import certificates from "@/sources/lottie/certificate.json";
import { fade } from "@/animations/animations";

export default function Explore() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <div className={styles.explore}>
      <motion.div
        className={styles.progressbar}
        style={{ scaleX }}
      ></motion.div>
      <WidthWrapper>
        <div className={styles.content}>
          <ExploreEntry reverse animation={programing} id={"programing"}>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className={styles.text}>
                W świat programowania witryn internetowych wprowadził mnie jeden
                z przedmiotów zawodowych w technikum. Bardzo polubiłem ten
                przedmiot, ale był on nastawiony na poznanie technologii HTML,
                CSS oraz JavaScript w podstawowej formie, która nie nadawała się
                na zastosowanie poza nauką.
              </div>
            </motion.div>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.text}>
                Moje praktyki zawodowe były nastawione na programowanie przy
                użyciu framework&apos;u Angular, który mi się nie spodobał.
                Spróbowałem swoich sił w React, który bardziej przypadł mi do
                gustu. Obecnie używam technologii NextJS 14
              </div>
            </motion.div>
          </ExploreEntry>
          <ExploreEntry animation={technologies} id={"technologies"} loop>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className={styles.header}>Konteneryzacja</div>
              <div className={styles.text}>
                Na potrzeby implementowania aplikacji w środowisku domowym
                nauczyłem się korzystać z technologii Docker oraz Kubernetes.
                Obecnie używam jednego klastra Kubernetes (w wersji k3s)
                zainstalowanego na jednej fizycznej maszynie
              </div>
            </motion.div>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.header}>Bazy danych</div>
              <div className={styles.text}>
                Swoją przygodę z bazami danych zaczynałem od baz relacyjnych. W
                ostatnim czasie spróbowałem swoich sił w zastosowaniach
                nierelacyjnych, które nie przypadły mi do gustu. Obecnie do
                budowania aplikacji internetowych używam baz MySQL z
                implementacją ORM&apos;u Prisma oraz bazy Redis jako cache
              </div>
            </motion.div>
          </ExploreEntry>
          <ExploreEntry reverse animation={computers} id={"computers"} loop>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className={styles.text}>
                Hardware zapoczątkował moją przygodę z informatyką. Zaczynałem
                od nowinek technologicznych, po składanie oraz naprawienie
                komputerów znajomym i rodzinie, kończąc na zainteresowaniu w
                technologiach serwerowych.
              </div>
            </motion.div>
          </ExploreEntry>
          <ExploreEntry reverse animation={certificates} id={"education"}>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className={styles.header}>Technik Informatyk</div>
              <div className={styles.headersecondary}>
                Technikum komunikacji - Zespół Szkół Komunikacji im. Hipolita
                Cegielskiego w Poznaniu
              </div>
              <div className={styles.text}>
                Ukończyłem Technikum z wykształceniem zawodowym jako technik
                informatyk. Rozszerzałem matematykę oraz język angielski. W
                technikum poznałem wiele osób z podobnymi zainteresowaniami oraz
                zapałem do informatyki, z którymi przyjaźnię się do dzisiaj.
              </div>
            </motion.div>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.header}>Cisco IT Essentials</div>
              <div className={styles.headersecondary}>
                Cisco Networking Academy - Cisco IT Essentials
              </div>
              <div className={styles.text}>
                Podczas nauki w technikum postanowiłem podjąć kurs Cisco IT
                Essentials. Kurs ten pozwolił mi poszerzyć swoją wiedzę z
                zakresu hardware&apos;u oraz sieci komputerowych.
              </div>
            </motion.div>
            <motion.div
              className={styles.section}
              initial={fade.off}
              whileInView={fade.on}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className={styles.header}>Bednary Driving City</div>
              <div className={styles.text}>
                Szkolenie z zakresu doskonalenia techniki jazdy dla kierowców
                samochodów osobowych stopień I
              </div>
            </motion.div>
          </ExploreEntry>
        </div>
      </WidthWrapper>
    </div>
  );
}
