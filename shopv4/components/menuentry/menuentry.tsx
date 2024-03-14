import Link from "next/link";
import styles from "./menuentry.module.css";

export default function MenuEntry(props) {
  return (
    <Link href={props.link} className={styles.entry}>
      <div className={styles.icon}>{props.children}</div>
      <div className={styles.text}>{props.text}</div>
    </Link>
  );
}
