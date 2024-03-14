import styles from "./categoryitem.module.css";
import { DynamicIcon } from "@/components/functions/dynamicicon";
import Link from "next/link";

export default function CategoryItem(props) {
  return (
    <Link
      href={"/products/category/" + props.link}
      className={styles.categoryitem}
    >
      <div className={styles.top}>
        <DynamicIcon name={props.icon}></DynamicIcon>
      </div>
      <div className={styles.bottom}>{props.categoryname}</div>
    </Link>
  );
}
