import styles from "./navbar.module.css";
import CustomLink from "../../../multi-use/customlink/customlink";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <CustomLink text={"o nas"} link="/" type={"fromBlack"}></CustomLink>
      <CustomLink
        text={"zbiórki"}
        link="zbiorki"
        type={"fromBlack"}
      ></CustomLink>
      <CustomLink
        text={"kontakt"}
        link="kontakt"
        type={"fromBlack"}
      ></CustomLink>
    </div>
  );
}
