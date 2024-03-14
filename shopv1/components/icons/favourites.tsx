import styles from "./icons.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function Favourites(props) {
  return (
    <div className={styles.icon}>
      <AiOutlineHeart className={styles.iconicon}></AiOutlineHeart>
      {props.children ? (
        <div className={styles.icontext}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}
