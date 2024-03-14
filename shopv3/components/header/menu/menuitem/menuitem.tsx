import { useState } from "react";
import Dropdown from "../dropdown/dropdown";
import styles from "./menuitem.module.css";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function MenuItem(props) {
  const [render, setRender] = useState(false);
  return (
    <Link
      onMouseEnter={() => setRender(true)}
      onMouseLeave={() => setRender(false)}
      href={props.link}
      className={styles.menuitem}
    >
      <div className={styles.icon}>{props.children}</div>
      <div className={styles.desc}>{props.desc}</div>
      {/* <AnimatePresence> DROPDOWN IN DEV
        {render && props.dropdown ? (
          <Dropdown
            type={props.dropdownTitle}
            dropdownItems={props.dropdownItems}
          ></Dropdown>
        ) : (
          ""
        )}
      </AnimatePresence> */}
    </Link>
  );
}
