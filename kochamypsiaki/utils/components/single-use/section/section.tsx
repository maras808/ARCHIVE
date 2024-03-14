import WidthWrapper from "@/utils/components/multi-use/widthwrapper/widthwrapper";
import styles from "./section.module.css";
import { RefObject } from "react";

interface sectionProps {
  title: string;
  text: string;
  anim: any;
  inverted?: boolean;
  scrollref?: RefObject<any>;
}

export default function Section({
  title,
  inverted,
  text,
  anim,
  scrollref,
}: sectionProps) {
  return (
    <div
      className={`${styles.section} ${
        !inverted ? styles.normal : styles.inverted
      }`}
      ref={scrollref}
    >
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.primary}>
            <div className={styles.anim}>{anim}</div>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.secondary}>{text}</div>
        </div>
      </WidthWrapper>
    </div>
  );
}
