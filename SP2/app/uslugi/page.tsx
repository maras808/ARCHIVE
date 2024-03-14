import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "./page.module.css";
import Tile from "@/utils/components/multi-use/tile/tile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi",
};

export default function Uslugi() {
  return (
    <div className={styles.main}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.tilewrapper}>
            <Tile
              title={"Komputery"}
              src={"/hardware.jpg"}
              link={"komputery"}
            ></Tile>
            <Tile
              title={"Oprogramowanie"}
              src={"/software.jpg"}
              link={"oprogramowanie"}
            ></Tile>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
