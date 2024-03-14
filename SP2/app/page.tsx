"use client";

import Background from "@singleuse/background/background";
import styles from "./page.module.css";
import WidthWrapper from "@multiuse/widthwrapper/widthwrapper";
import CardSection from "@singleuse/cardsection/cardsection";
import Card from "@singleuse/cardsection/card/card";
import {
  FluentTopSpeed20Filled,
  GravityUiWrench,
  MaterialSymbolsShieldLockOutline,
  MdiReact,
} from "@/utils/icones";
import { join } from "@/utils/animations";
import Mission from "@/utils/components/single-use/mission/mission";
import Numbers from "@/utils/components/single-use/numbers/numbers";
import MainDisplay from "@/utils/components/single-use/maindisplay/maindisplay";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <main className={styles.main}>
      <Background src="/background.mp4" blurScale={2} video>
        <MainDisplay
          primaryText={"Twój komputer, nasza pasja!"}
          secondaryText={"Z nami technologia staje się łatwiejsza"}
          refa={ref}
        ></MainDisplay>
      </Background>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.secondarywrapper}>
            <Mission
              title="Naprawiamy komputery i tworzymy nowoczesne strony internetowe"
              content="Dla naszych klientów to więcej niż usługa - to pewność sprawnego sprzętu i atrakcyjnej obecności online. Zaufaj profesjonalistom, zatroszczymy się o Twój cyfrowy świat!"
              refa={ref}
            ></Mission>
            <CardSection>
              <div className={styles.cardleft}>
                <Card
                  animation={join.item.fromLeft.tween}
                  subanimation={join.subitem}
                  icon={<GravityUiWrench></GravityUiWrench>}
                  title="Szybka Reakcja"
                  content="Potrzebujesz natychmiastowej pomocy związanej z komputerem? Zajmiemy się tym ekspresowo, przywracając sprzęt do życia bez zwłoki."
                ></Card>
                <Card
                  animation={join.item.fromLeft.tween}
                  subanimation={join.subitem}
                  icon={<MdiReact></MdiReact>}
                  title="Projektowanie z Pasją"
                  content="Tworzymy strony internetowe, które nie tylko wyglądają świetnie, ale też skutecznie przyciągają uwagę Twoich odwiedzających."
                ></Card>
              </div>
              <div className={styles.cardright}>
                <Card
                  animation={join.item.fromRight.tween}
                  subanimation={join.subitem}
                  icon={
                    <MaterialSymbolsShieldLockOutline></MaterialSymbolsShieldLockOutline>
                  }
                  title="Bezpieczeństwo na Pierwszym Miejscu"
                  content="Zabezpieczamy Twoje urządzenia przed wszelkimi zagrożeniami online. Twój komputer zasługuje na pełną ochronę, a my jesteśmy tu, aby Ci ją zapewnić."
                ></Card>
                <Card
                  animation={join.item.fromRight.tween}
                  subanimation={join.subitem}
                  icon={<FluentTopSpeed20Filled></FluentTopSpeed20Filled>}
                  title="Optymalizacja dla Pełnej Wydajności"
                  content="Optymalizujemy kod, aby Twoje aplikacje działały szybko i sprawnie. Doświadcz wydajności programowania na nowym poziomie!"
                ></Card>
              </div>
            </CardSection>
          </div>
          <Numbers
            globalTitle="Jesteśmy dumni z naszych liczb"
            element={[
              {
                title: "Lat doświadczenia w informatyce",
                number: 8,
                after: "+",
              },
              {
                title: "Prowadzonych stron internetowych",
                number: 10,
              },
              { title: "Naprawionych komputerów", number: 20, after: "+" },
              { title: "Temp", number: 22 },
            ]}
          ></Numbers>
        </div>
      </WidthWrapper>
    </main>
  );
}
