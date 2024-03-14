"use client";

import { useEffect } from "react";
import styles from "./sort.module.css";
import store from "@/app/store/store";
import { useSnapshot } from "valtio";

interface sortProps {
  arr: Array<Number>;
}

export default function Sort({ arr }: sortProps) {
  const snap = useSnapshot(store);

  useEffect(() => {
    for (let i = 0; i < store.sortArr.length; i++) {
      //Inner pass
      for (let j = 0; j < store.sortArr.length - i - 1; j++) {
        //Value comparison using ascending order

        setTimeout(() => {
          if (store.sortArr[j + 1] < store.sortArr[j]) {
            //Swapping
            [store.sortArr[j + 1], store.sortArr[j]] = [
              store.sortArr[j],
              store.sortArr[j + 1],
            ];
          }
        }, 2000);
      }
    }
    console.log(snap.sortArr);
  }, []);
  return (
    <div className={styles.sort}>
      {arr.map((element: any) => {
        const currHeightPercent = (element / arr.length) * 100;
        return (
          <div
            className={styles.element}
            key={`${element}`}
            style={{ height: `${currHeightPercent}%` }}
          ></div>
        );
      })}
    </div>
  );
}
