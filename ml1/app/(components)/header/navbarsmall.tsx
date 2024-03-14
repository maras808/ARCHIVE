import { useSnapshot } from "valtio";
import styles from "./header.module.css";
import store from "@/store";
import Link from "next/link";
import Icons from "../icons/icons";

export default function NavbarSmall(props: { links: any[] }) {
  useSnapshot(store);
  return (
    <>
      <div
        className={styles.mobileicon}
        onClick={() => {
          store.menu = !store.menu;
        }}
      >
        <div className={styles.top}>
          <div
            className={[styles.tl, store.menu ? styles.rotateleft : ""].join(
              " "
            )}
          >
            {" "}
          </div>
          <div
            className={[styles.tr, store.menu ? styles.rotateright : ""].join(
              " "
            )}
          >
            {" "}
          </div>
        </div>
        <div className={styles.mid}>
          <div
            className={[styles.ml, store.menu ? styles.rotateleft : ""].join(
              " "
            )}
          >
            {" "}
          </div>
          <div
            className={[styles.mr, store.menu ? styles.rotateright : ""].join(
              " "
            )}
          >
            {" "}
          </div>
        </div>
        <div className={styles.bot}>
          <div
            className={[styles.bl, store.menu ? styles.rotateleft : ""].join(
              " "
            )}
          >
            {" "}
          </div>
          <div
            className={[styles.br, store.menu ? styles.rotateright : ""].join(
              " "
            )}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={[styles.menu, store.menu ? styles.menuheight : ""].join(" ")}
      >
        <div className={styles.menulinks}>
          {props.links.map((el) => {
            return (
              <Link
                href={el.link}
                key={el.key}
                className={[styles.link, styles.menulink].join(" ")}
                onClick={() => {
                  store.menu = !store.menu;
                }}
              >
                {el.name}
              </Link>
            );
          })}
        </div>
        <div className={styles.menurest}>
          <div className={styles.menurestleft}>Marek Ławniczak</div>
          <div className={styles.menurestright}>
            <Icons></Icons>
          </div>
        </div>
      </nav>
    </>
  );
}
