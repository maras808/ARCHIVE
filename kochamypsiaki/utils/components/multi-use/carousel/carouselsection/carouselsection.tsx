import { RefObject } from "react";
import WidthWrapper from "../../widthwrapper/widthwrapper";
import styles from "./carouselsection.module.css";
import CustomLink from "../../customlink/customlink";

interface carouselSection {
  scrollref: RefObject<any>;
}

export default function CarouselSection({ scrollref }: carouselSection) {
  return (
    <div className={styles.wrap}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.carouselsection}>
            <div className={styles.blur}></div>
            <div className={styles.main}>Witajcie na Zbieramy Dla Łapek! </div>
            <div className={styles.secondary}>
              Jesteśmy grupą ludzi z pasją do psów, dążącą do poprawy losu
              bezdomnych zwierząt. Dołączcie do naszej społeczności, aby razem
              tworzyć lepsze życie dla każdej łapki!
            </div>
            <div className={styles.button}>
              <CustomLink
                text="Dowiedz się więcej"
                scrollToRef={scrollref}
                type="fromWhite"
              ></CustomLink>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
