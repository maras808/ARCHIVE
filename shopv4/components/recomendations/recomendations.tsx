"use client";

import styles from "./recomendations.module.css";

import { getProducts } from "@/actions/actions";
import { useEffect, useState } from "react";
import images from "../../json/bannerexport.json";
import Carousel from "../carousel/carousel";
import Item from "../item/item";
import WidthWrapper from "../widthwrapper/widthwrapper";

export default function Recomendations() {
  const [products, setProducts] = useState(Array);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <div className={styles.recomendations}>
      <WidthWrapper>
        <div className={styles.recomendationscontent}>
          <div className={styles.left}>
            <Carousel
              imgs={images}
              renderButtons={false}
              renderNavigator={true}
              autoplay={true}
              delay={4250}
              customStylesImgs={{ borderRadius: "1rem" }}
            ></Carousel>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Recomended</div>
            <div className={styles.items}>
              {products.map((product) => {
                return product.recomended ? (
                  <Item product={product} enlarge={true}></Item>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
