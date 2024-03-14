import { BsMessenger } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

import pages from "../../../json/pages.json";
import global from "../../global.module.css";
import Link from "next/link";
import { useSnapshot } from "valtio";
import store from "@/store";

export default function Icons() {
  useSnapshot(store);
  return (
    <>
      <Link
        href={pages[0].link}
        onClick={() => {
          store.menu = !store.menu;
        }}
      >
        <ImHome className={global.home}></ImHome>
      </Link>

      <a href="tel:516-976-599">
        <AiFillPhone
          className={global.phone}
          onClick={() => {
            store.menu = !store.menu;
          }}
        ></AiFillPhone>{" "}
      </a>
      <a href="mailto: mareklawniczak02@gmail.com">
        <MdEmail
          className={global.mail}
          onClick={() => {
            store.menu = !store.menu;
          }}
        ></MdEmail>
      </a>
      <a href="https://www.facebook.com/lawniczakmarek">
        <BsMessenger
          className={global.messanger}
          onClick={() => {
            store.menu = !store.menu;
          }}
        ></BsMessenger>
      </a>
    </>
  );
}
