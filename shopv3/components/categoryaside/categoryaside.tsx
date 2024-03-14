"use client";
import styles from "./categoryaside.module.css";
import { useState } from "react";
import CatDropdown from "./catdropdown/catdropdown";

export default function CategoryAside(props) {
  const [expanded, triggerExpanded] = useState(false);
  return (
    <div className={styles.categoryaside}>
      <div className={styles.catdropdownstate}>
        {/* <div
          onClick={() => {
            triggerExpanded(true);
          }}
        >
          Expand all
        </div> */}
        <div
          className={styles.colapse}
          onClick={() => {
            triggerExpanded(!expanded);
          }}
        >
          Colapse all
        </div>
      </div>
      {props.categories.map((category) => {
        return (
          <CatDropdown category={category} trigger={expanded}></CatDropdown>
        );
      })}
    </div>
  );
}
