"use client";

import WidthWrapper from "../widthwrapper/widthwrapper";
import styles from "./optionsstrip.module.css";
import { montserratBold } from "../fonts/fonts";
import OptionStripEntry from "../optionstripentry/optionstripentry";
import { getProducts } from "@/actions/actions";
import { useState, useEffect } from "react";

export default function OptionsStrip() {
  const [recomended, setRecomended] = useState(Array);
  const [thisweeksbest, setThisweeksbest] = useState(Array);
  const [bestvalue, setBestvalue] = useState(Array);

  useEffect(() => {
    getProducts().then((data) => {
      data.map((el) => {
        if (el.recomended) {
          setRecomended((arr) => [...arr, el]);
        }
        if (el.thisweeksbest) {
          setThisweeksbest((arr) => [...arr, el]);
        }
        if (el.bestvalue) {
          setBestvalue((arr) => [...arr, el]);
        }
      });
    });
  }, []);
  return (
    <div className={`${styles.optionsstrip} ${montserratBold.className}`}>
      <WidthWrapper>
        <div className={styles.content}>
          <OptionStripEntry
            text={"Recomended"}
            products={recomended}
          ></OptionStripEntry>
          <OptionStripEntry
            text={"This week's best"}
            products={thisweeksbest}
          ></OptionStripEntry>
          <OptionStripEntry
            text={"Best value"}
            products={bestvalue}
          ></OptionStripEntry>
        </div>
      </WidthWrapper>
    </div>
  );
}
