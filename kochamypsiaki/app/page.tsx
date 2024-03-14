"use client";

import Carousel from "@multiuse/carousel/carousel";
import styles from "./page.module.css";

import images from "@utils/info/bannerexport.json";
import Section from "@singleuse/section/section";
import { useRef } from "react";
import dog from "@utils/lotties/dog.json";
import info from "@utils/lotties/info.json";
import dogsniff from "@utils/lotties/dogsniff.json";
import dogswim from "@utils/lotties/dogswim.json";
import dogfeed from "@utils/lotties/dogfeed.json";
import LottieCustom from "@/utils/components/multi-use/lottiecustom/lottiecustom";

export default function Home() {
  const ref = useRef<any>(null);
  return (
    <main className={styles.home}>
      <Carousel
        scrollref={ref}
        renderButtons
        renderNavigation
        images={images}
      ></Carousel>
      <div className={styles.sections}>
        <Section
          scrollref={ref}
          title="O nas"
          text="Witajcie w naszym małym, ale pełnym miłości projekcie - Zbieramy Dla Łapek! Jesteśmy grupą pasjonatów zwierząt, którzy postanowili połączyć siły i wspólnie działać na rzecz bezdomnych czworonogów. Nasza historia zaczęła się od wspólnej pasji do psów i pragnienia zmieniania ich życia na lepsze."
          anim={<LottieCustom animationData={info} loop={false}></LottieCustom>}
        ></Section>
        <Section
          title="Nasza misja"
          text="Naszym głównym celem jest wspieranie schronisk dla psów, dostarczając im niezbędnych środków, jak również podnosząc świadomość społeczeństwa na temat problemu bezdomności zwierząt. Nie możemy zobaczyć cierpienia zwierząt, a nasza misja polega na tym, aby każdy pies miał szansę na lepsze życie."
          anim={<LottieCustom animationData={dogfeed} loop></LottieCustom>}
          inverted
        ></Section>
        <Section
          title="Dlaczego Zbieramy Dla Łapek?"
          text="Decyzja o rozpoczęciu zbiórki nie wynika tylko z chęci pomocy, ale także z przekonania, że nawet najmniejszy wkład może mieć ogromny wpływ. Razem możemy uczynić różnicę w życiu wielu psich przyjaciół, zapewniając im ciepłe schronienie, jedzenie i opiekę medyczną."
          anim={<LottieCustom animationData={dog} loop></LottieCustom>}
        ></Section>
        <Section
          title="Jak Działamy"
          text="Nasza grupa skupia się na organizowaniu zbiórek środków finansowych, karmy, koców, zabawek i innych niezbędnych artykułów, które pomagają schroniskom w codziennej opiece nad zwierzętami. Działamy z pełnym zaangażowaniem i transparentnością, aby każdy darczyńca mógł śledzić, jakie konkretne korzyści przynoszą nasze zbiórki."
          anim={<LottieCustom animationData={dogsniff} loop></LottieCustom>}
          inverted
        ></Section>
        <Section
          title="Dołącz Do Nas!"
          text="Jesteśmy otwarci na współpracę z każdym, kto podziela naszą pasję i pragnienie pomocy zwierzętom w potrzebie. Niezależnie od tego, czy możesz przekazać datek, wziąć udział w zbiórce, czy po prostu podzielić się informacją z innymi, Twoje wsparcie ma znaczenie. Razem tworzymy silną społeczność, gotową działać dla dobra naszych czworonożnych przyjaciół.
        Dziękujemy za odwiedzenie naszej strony i za wszelką pomoc, jaką możesz nam zaoferować. Każdy krok, jaki podejmujemy, przyczynia się do poprawy losu bezdomnych zwierząt. Razem zmieniamy świat jedną łapą na raz!"
          anim={<LottieCustom animationData={dogswim} loop></LottieCustom>}
        ></Section>
      </div>
    </main>
  );
}
