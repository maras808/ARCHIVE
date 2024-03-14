import List from "@/components/list/list";
import globals from "../globals.module.css";
import styles from "./page.module.css";

async function getUserData() {
  const query = await fetch("http://localhost:3000/userdata/favourites", {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Favourites() {
  const userdata = await getUserData();
  return (
    <div className={styles.favourites}>
      <div className={globals.widthwrapper}>
        <div className={styles.favouritescontent}>
          <List type={"favourites"} elements={userdata[0].favourites}></List>
        </div>
      </div>
    </div>
  );
}
