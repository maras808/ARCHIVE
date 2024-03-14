import Heart from "./heart/heart";
import styles from "./item.module.css";
import Tags from "./tags/tags";
import Link from "next/link";

export default function Item(props) {
  return (
    <div className={styles.item}>
      <div className={styles.headers}>
        {props.favbutton ? <Heart topleft={true}></Heart> : ""}
        {props.tags ? <Tags prime={props.prime} tags={props.tags}></Tags> : ""}
      </div>
      <Link href={props.link} className={styles.link}>
        <div className={styles.top}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.bottom}>
          {props.productname}
          {props.shortdesc}
        </div>
      </Link>
    </div>
  );
}
