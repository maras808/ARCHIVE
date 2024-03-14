import styles from "./logo.module.css";
import { IoLogoFoursquare } from "react-icons/io";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <IoLogoFoursquare></IoLogoFoursquare>
    </div>
  );
}
