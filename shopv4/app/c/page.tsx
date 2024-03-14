"use client";

import { getProductsByStatement } from "@/actions/actions";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Item from "@/components/item/item";
import styles from "./page.module.css";
import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import Link from "next/link";

export default function C() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category")!;
  const subcategory = searchParams.get("subcategory")!;
  const entry = searchParams.get("entry")!;
  const search = searchParams.get("search")!;
  const [products, setProducts] = useState(Array);
  useEffect(() => {
    getProductsByStatement(category, subcategory, entry, search).then(
      (products) => setProducts(products)
    );
  }, [searchParams]);
  return (
    <div className={styles.c}>
      <WidthWrapper>
        <div className={styles.content}>
          <div className={styles.currentparams}>
            {category ? (
              <div className={styles.cwrap}>
                <Link
                  href={{
                    pathname: "/c",
                    query: `category=${category}&subcategory=&entry=&search=`,
                  }}
                  className={styles.ctext}
                >
                  {category}
                </Link>
              </div>
            ) : (
              ""
            )}
            {subcategory ? (
              <div className={styles.cwrap}>
                <div className={styles.slash}>/</div>
                <Link
                  href={{
                    pathname: "/c",
                    query: `category=${category}&subcategory=${subcategory}&entry=&search=`,
                  }}
                  className={styles.ctext}
                >
                  {subcategory}
                </Link>
              </div>
            ) : (
              ""
            )}
            {entry ? (
              <div className={styles.cwrap}>
                <div className={styles.slash}>/</div>
                <Link
                  href={{
                    pathname: "/c",
                    query: `category=${category}&subcategory=${subcategory}&entry=${entry}&search=`,
                  }}
                  className={styles.ctext}
                >
                  {entry}
                </Link>
              </div>
            ) : (
              ""
            )}
            {search ? (
              <div className={styles.cwrap}>
                <div className={styles.slash}>/</div>
                <div className={styles.ctext}>{search}</div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.results}>
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
        </div>
      </WidthWrapper>
    </div>
  );
}
