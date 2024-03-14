import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import styles from "../global.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komputery",
};

export default function Komputery() {
  return (
    <div className={styles.komputery}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              Serwis Komputerowy - Profesjonalne Naprawy dla Twojego Komputera!
            </div>
            <div className={styles.desc}>
              Witaj w naszej sekcji naprawy komputerów, gdzie rozwiązujemy
              problemy z sprzętem i oprogramowaniem, przywracając Twojemu
              urządzeniu pełną sprawność. Nasz doświadczony zespół ekspertów
              oferuje kompleksowe usługi naprawy, obejmujące diagnozowanie i
              usuwanie usterek sprzętowych, optymalizację systemu operacyjnego,
              eliminację wirusów oraz przywracanie utraconych danych.
              Niezależnie od tego, czy potrzebujesz szybkiej naprawy czy
              profesjonalnego wsparcia technicznego, jesteśmy tu, aby zapewnić
              Ci efektywne rozwiązania i przywrócić pełną wydajność Twojego
              komputera. Odkryj nasze usługi naprawy, aby cieszyć się
              bezproblemowym funkcjonowaniem swojego urządzenia!
            </div>
          </div>
          <div className={styles.right}>qwe</div>
        </div>
        <div className={styles.pricing}>asd</div>
      </WidthWrapper>
    </div>
  );
}
