import styles from "./icons.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart(props) {
  return (
    <div className={styles.icon}>
      <AiOutlineShoppingCart
        className={styles.iconicon}
      ></AiOutlineShoppingCart>
      {props.children ? (
        <div className={styles.icontext}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}
