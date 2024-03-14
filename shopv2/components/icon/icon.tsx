import styles from "./icon.module.css";

export default function Icon(props) {
  return (
    <div className={styles.icon}>
      <div className={styles.top}>{props.children}</div>
      {props.desc ? <div className={styles.bottom}>{props.desc}</div> : ""}
    </div>
  );
}
