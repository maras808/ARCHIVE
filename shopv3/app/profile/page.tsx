import globals from "../globals.module.css";
import styles from "./page.module.css";
import ProfileInfo from "./profileinfo/profileinfo";

export default function Settings() {
  return (
    <div className={styles.settings}>
      <div className={globals.widthwrapper}>
        <div className={styles.settingscontent}>
          <ProfileInfo></ProfileInfo>
        </div>
      </div>
    </div>
  );
}
