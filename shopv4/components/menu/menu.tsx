import DarkMode from "../darkmode/darkmode";
import {
  IcBaselinePerson,
  IconamoonHomeFill,
  MaterialSymbolsFavoriteRounded,
} from "../icons/icons";
import MenuEntry from "../menuentry/menuentry";
import styles from "./menu.module.css";

export default async function Menu() {
  return (
    <div className={styles.menu}>
      <MenuEntry text="Home" link="/">
        <IconamoonHomeFill></IconamoonHomeFill>
      </MenuEntry>
      <MenuEntry text="Favourites" link="/favourites">
        <MaterialSymbolsFavoriteRounded></MaterialSymbolsFavoriteRounded>
      </MenuEntry>
      <MenuEntry text="User" link="/user">
        <IcBaselinePerson></IcBaselinePerson>
      </MenuEntry>
      <DarkMode style={{ marginLeft: "1rem" }}></DarkMode>
    </div>
  );
}
