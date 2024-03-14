import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return (
    <div className={styles.kontakt}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.left}>Skontaktuj się z nami</div>
          <div className={styles.right}>qwe</div>
        </div>
      </WidthWrapper>
    </div>
  );
}
