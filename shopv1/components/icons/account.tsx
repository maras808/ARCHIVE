import styles from "./icons.module.css";
import { AiOutlineUser } from "react-icons/ai";

export default function Account(props) {
  return (
    <div className={styles.icon}>
      <AiOutlineUser className={styles.iconicon}></AiOutlineUser>
      {props.children ? (
        <div className={styles.icontext}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}
