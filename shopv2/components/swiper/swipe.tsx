"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Scrollbar, A11y } from "swiper";
import styles from "./swipe.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

export default function Swipe() {
  return (
    <Swiper
      className={styles.swipe}
      effect="fade"
      modules={[Autoplay, Navigation, Scrollbar, A11y, EffectFade]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 6000,
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
    </Swiper>
  );
}
