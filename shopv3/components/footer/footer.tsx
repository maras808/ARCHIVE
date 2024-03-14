import styles from "./footer.module.css";
import globals from "../../app/globals.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={globals.widthwrapper}>
        <div className={styles.footercontent}>
          <div className={styles.section}>
            <div className={styles.title}>Navigation</div>
            <div className={styles.desc}>qweqwe</div>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>Navigation</div>
            <div className={styles.desc}>qweqwe</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
