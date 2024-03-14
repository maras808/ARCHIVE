import Logo from "@multiuse/logo/logo";
import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";

export default function Header() {
  return (
    <div className={styles.header}>
      <WidthWrapper>
        <div className={styles.content}>
          <Logo></Logo>
          <Navbar></Navbar>
        </div>
      </WidthWrapper>
    </div>
  );
}
