import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "../global.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oprogramowanie",
};

export default function Oprogramowanie() {
  return (
    <div className={styles.komputery}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              Wznieś swój biznes na kolejny poziom stroną internetową
            </div>
            <div className={styles.desc}>
              Strona internetowa to wirtualna wizytówka każdego biznesu,
              odzwierciedlająca profesjonalizm i atrakcyjność. W naszym zespole
              specjalistów ds. projektowania stron internetowych jesteśmy gotowi
              podjąć współpracę, aby stworzyć dla Ciebie unikalną stronę,
              idealnie dostosowaną do potrzeb i wizji Twojego biznesu. Rozmówmy
              o szczegółach, aby zrozumieć Twoje cele i oczekiwania. Dzięki
              naszemu doświadczeniu i kreatywności możemy wspólnie zbudować
              stronę internetową, która wyróżni Cię na rynku. Niech Twoja wizja
              stanie się rzeczywistością z naszym profesjonalnym podejściem do
              projektowania stron!
            </div>
          </div>
          <div className={styles.right}>qwe</div>
        </div>
        <div className={styles.pricing}>asd</div>
      </WidthWrapper>
    </div>
  );
}
