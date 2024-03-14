import WidthWrapper from "../widthwrapper/widthwrapper";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WidthWrapper>
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
      </WidthWrapper>
    </footer>
  );
}
