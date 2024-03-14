import UserSettings from "../usersettings/usersettings";
import Overlay from "./overlay/overlay";
import styles from "./profileinfo.module.css";

async function getUserData() {
  const query = await fetch("http://localhost:3000/userdata", {
    next: { revalidate: 10 }, //<-- REMOVE TO ADD CASH REVALIDATION
  });
  const response = await query.json();
  return response.res;
}

export default async function ProfileInfo() {
  const userdata = await getUserData();

  return (
    <div className={styles.profileinfo}>
      <div className={styles.profilewrapper}>
        <div className={styles.picture}>
          <img src="/products/iphone-14-pro.jpg" alt="" />
          <Overlay text={"Change photo"}></Overlay>
        </div>
        <div className={styles.name}>{userdata[0].username}</div>
        <div>Joined on: {userdata[0].joined.substring(0, 10)}</div>
      </div>
      <div className={styles.profileside}>
        <UserSettings></UserSettings>
      </div>
    </div>
  );
}
