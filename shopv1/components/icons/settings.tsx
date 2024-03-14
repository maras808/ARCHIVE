import styles from "./icons.module.css";
import { AiOutlineSetting } from "react-icons/ai";

export default function Settings(props) {
  return (
    <div className={styles.icon}>
      <AiOutlineSetting className={styles.iconicon}></AiOutlineSetting>
      {props.children ? (
        <div className={styles.icontext}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}
