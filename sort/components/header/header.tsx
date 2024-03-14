import WidthWrapper from "../widthwrapper/widthwrapper";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.title}>SortVisualizer</div>
        </div>
      </WidthWrapper>
    </div>
  );
}
