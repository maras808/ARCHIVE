"use client";
import styles from "./recomendationsswipe.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSnapshot } from "valtio";
import store from "@/stores/store";

export default function RecomendationsSwipe() {
  useSnapshot(store);
  return (
    <Swiper
      className={styles.recomendationsswipe}
      modules={[Autoplay, Navigation, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={store.isSmall ? 1 : 2}
      navigation
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img className={styles.item} src="/1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.item} src="/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.item} src="/3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.item} src="/1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.item} src="/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.item} src="/3.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
