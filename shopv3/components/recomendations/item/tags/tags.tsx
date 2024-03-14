import styles from "./tags.module.css";

export default function Tags(props) {
  return (
    <div className={styles.tags}>
      <div className={styles.wrap}>
        <div
          className={styles.scroll}
          style={{ animationDuration: String(props.tags.length + 4) + "s" }}
        >
          {props.tags.map((el) => {
            return <div>{el}</div>;
          })}
        </div>
      </div>
      {props.prime ? <div className={styles.prime}>prime</div> : ""}
    </div>
  );
}
