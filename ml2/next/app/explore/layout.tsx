import SideNav from "@/components/sidenav/sidenav";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import { enlarge } from "@/animations/animations";

interface exploreLayoutProps {
  children: ReactNode;
}

export default function ExploreLayout({ children }: exploreLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>{children}</div>
      <SideNav animation={enlarge}></SideNav>
    </div>
  );
}
