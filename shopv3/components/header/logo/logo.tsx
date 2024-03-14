import styles from "./logo.module.css";
import { IoLogoFoursquare } from "react-icons/io";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link className={styles.logolink} href="/">
        <IoLogoFoursquare></IoLogoFoursquare>
      </Link>
    </div>
  );
}
