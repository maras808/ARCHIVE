import styles from "./widthwrapper.module.css";

import { ReactNode } from "react";

export enum customWidthEnum {
  default = 1500,
  small = 1200,
  big = 2000,
}

interface WidthWrapperProps {
  children: ReactNode;
  customWidth?: customWidthEnum;
}

export default function WidthWrapper({
  children,
  customWidth,
}: WidthWrapperProps) {
  return (
    <div
      className={styles.widthwrapper}
      style={
        customWidth
          ? { maxWidth: `${customWidth}px` }
          : { maxWidth: `${customWidthEnum.default}px` }
      }
    >
      {children}
    </div>
  );
}
