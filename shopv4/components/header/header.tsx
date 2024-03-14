import { Bi123 } from "../icons/icons";
import Menu from "../menu/menu";
import Search from "../search/search";
import WidthWrapper from "../widthwrapper/widthwrapper";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Bi123></Bi123>
          </div>
          <div className={styles.search}>
            <Search></Search>
          </div>
          <div className={styles.menu}>
            <Menu></Menu>
          </div>
        </div>
      </WidthWrapper>
    </header>
  );
}
