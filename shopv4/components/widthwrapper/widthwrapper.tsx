import styles from "./widthwrapper.module.css";

export default function WidthWrapper(props) {
  return <div className={styles.widthwrapper}>{props.children}</div>;
}
