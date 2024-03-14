import Link from "next/link";
import styles from "./list.module.css";
import Heart from "@/components/recomendations/item/heart/heart";

export default function List(props) {
  return (
    <div className={styles.list}>
      {props.elements ? (
        props.elements.map((el) => {
          return (
            <div className={styles.wrapper}>
              <Link href={"/product/" + el._id} className={styles.entry}>
                <div className={styles.title}>{el.productname}</div>
                <div className={styles.desc}>{el.shortdescription}</div>
              </Link>
              <Heart></Heart>
            </div>
          );
        })
      ) : (
        <div>qwe</div>
      )}
    </div>
  );
}
