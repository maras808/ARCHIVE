import styles from "./menu.module.css";
import MenuItem from "./menuitem/menuitem";

import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineInfoCircle,
} from "react-icons/ai";

async function getUserData() {
  const query = await fetch("http://localhost:3000/userdata/favourites", {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Menu(props) {
  const userdata = await getUserData();
  return (
    <div className={styles.menu}>
      <MenuItem desc={"Home"} link="/" dropdown={false}>
        <AiOutlineHome></AiOutlineHome>
      </MenuItem>
      <MenuItem
        desc={"Favourites"}
        link="/favourites"
        dropdown={true}
        dropdownTitle={"Favourites"}
        dropdownItems={userdata[0].favourites}
      >
        <AiOutlineHeart></AiOutlineHeart>
      </MenuItem>
      <MenuItem desc={"Profile"} link="/profile" dropdown={false}>
        <AiOutlineUser></AiOutlineUser>
      </MenuItem>
      <MenuItem desc={"About Us"} link="/about-us" dropdown={false}>
        <AiOutlineInfoCircle></AiOutlineInfoCircle>
      </MenuItem>
    </div>
  );
}
