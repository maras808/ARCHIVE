import List from "@/components/list/list";
import globals from "../globals.module.css";
import styles from "./page.module.css";

async function getUserData() {
  const query = await fetch("http://localhost:3000/userdata", {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Cart() {
  const userdata = await getUserData();
  return (
    <div className={styles.cart}>
      <div className={globals.widthwrapper}>
        <div className={styles.cartcontent}>
          <List type={"cart"} elements={userdata[0].cart}></List>
        </div>
      </div>
    </div>
  );
}
