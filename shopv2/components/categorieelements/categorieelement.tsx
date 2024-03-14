"use client";

import { useState } from "react";
import styles from "./categorieelement.module.css";
import CategoriesDropdown from "../categoriesdropdown/categoriesdropdown";

export default function CategorieElement(props) {
  const [renderDropdown, setRenderDropdown] = useState(false);

  return (
    <div
      className={styles.categorieelement}
      onMouseEnter={() => setRenderDropdown(true)}
      onMouseLeave={() => setRenderDropdown(false)}
    >
      <div className={styles.top}></div>
      {props.desc ? <div className={styles.bottom}>{props.desc}</div> : ""}
      {renderDropdown ? (
        <CategoriesDropdown>{props.children}</CategoriesDropdown>
      ) : (
        ""
      )}
    </div>
  );
}
