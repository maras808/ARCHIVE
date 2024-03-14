import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.left}>qwe</div>
          <div className={styles.right}>asd</div>
        </div>
      </WidthWrapper>
    </footer>
  );
}
