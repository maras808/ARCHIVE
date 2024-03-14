"use client";

import globals from "../../app/globals.module.css";
import Carousel from "../carousel/carousel";
import styles from "./banner.module.css";

import images from "../../json/bannerexport.json";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={globals.widthwrapper}>
        <Carousel
          imgs={images}
          renderButtons={true}
          renderNavigator={true}
          autoplay={true}
          delay={7625}
        ></Carousel>
      </div>
    </div>
  );
}
