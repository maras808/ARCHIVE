import styles from "./header.module.css";
import WidthWrapper, { customWidthEnum } from "../widthwrapper/widthwrapper";
import Logo from "../logo/logo";
import Menu from "../menu/menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <WidthWrapper customWidth={customWidthEnum.big}>
        <div className={styles.content}>
          <Logo text={"Marek Ławniczak"}></Logo>
          <Menu></Menu>
        </div>
      </WidthWrapper>
    </div>
  );
}
