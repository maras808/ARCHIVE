"use client";

import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import styles from "./page.module.css";
import Item from "@/components/item/item";
import { useState, useEffect } from "react";
import { getProducts } from "../../actions/actions";

export default function Favourites() {
  const [products, setProducts] = useState(Array);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <div className={styles.favourites}>
      <WidthWrapper>
        <div className={styles.content}>
          {products.map((product) => {
            return (
              <Item
                product={product}
                style={{ width: "100%" }}
                prime={true}
                short={true}
                long={true}
              ></Item>
            );
          })}
        </div>
      </WidthWrapper>
    </div>
  );
}
