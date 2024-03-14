"use client";

import styles from "./search.module.css";
import {
  Rotate,
  ShadowAnimation,
  StaggerChildren,
} from "@animations/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MaterialSymbolsArrowBackIosNew } from "../icons/icons";
import {
  getCategories,
  getProducts,
  getSubcategories,
  getSubcategoriesEntries,
  seed,
} from "@/actions/actions";
import Link from "next/link";

export default function Search() {
  const [animate, setAnimate] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectDropdown, setSelectDropdown] = useState(false);
  const [products, setProducts] = useState(Array);
  const [categories, setCategories] = useState(Array);
  const [subcategories, setSubcategories] = useState(Array);
  const [subcategoriesEntries, setSubcategoriesEntries] = useState(Array);
  const [currCategoryId, setCurrCategoryId] = useState(Number);
  const [currCategoryName, setCurrCategoryName] = useState(String);
  const [selectACategory, setSelectACategory] = useState(true);
  const [selectText, setSelectText] = useState("select");
  const [selectCategoryLink, setSelectCategoryLink] = useState(" ");
  const [selectSubcategoryLink, setSelectSubcategoryLink] = useState("");
  const [selectEntryLink, setSelectEntryLink] = useState(" ");
  const [searchIsFocused, setSearchIsFocused] = useState(false);

  const filterOffset = 3;

  useEffect(() => {
    seed();
    getProducts().then((data) => setProducts(data));
    getCategories().then((data) => setCategories(data));
    getSubcategories().then((data) => setSubcategories(data));
    getSubcategoriesEntries().then((data) => setSubcategoriesEntries(data));
  }, []);

  return (
    <>
      <motion.form
        initial={ShadowAnimation.off}
        whileHover={ShadowAnimation.on}
        animate={animate ? ShadowAnimation.on : ShadowAnimation.off}
        className={styles.search}
      >
        <input
          className={styles.text}
          onFocus={() => {
            setAnimate(true);
            setSearchIsFocused(true);
          }}
          onBlur={() => {
            setAnimate(false);
            setSearchIsFocused(false);
          }}
          placeholder="Search..."
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <div
          className={styles.select}
          onClick={() => {
            setSelectDropdown(!selectDropdown);
            setSelectCategoryLink("");
            setSelectSubcategoryLink("");
            setSelectEntryLink("");
            setSelectText("select");
          }}
        >
          {selectText}
          <motion.div
            className={styles.arrowwrap}
            initial={Rotate.off}
            animate={selectDropdown ? Rotate.on : Rotate.off}
          >
            <MaterialSymbolsArrowBackIosNew></MaterialSymbolsArrowBackIosNew>
          </motion.div>
        </div>
        <Link
          href={{
            pathname: `/c`,
            query: `category=${selectCategoryLink}&subcategory=${selectSubcategoryLink}&entry=${selectEntryLink}&search=${filter}`,
          }}
          className={styles.submit}
          onClick={() => setSelectDropdown(false)}
        >
          Search
        </Link>
        <motion.div className={styles.searchdropdown}>
          {products.map((product) => {
            if (
              filter.length >= filterOffset &&
              product.name.toLowerCase().includes(filter) &&
              searchIsFocused
            ) {
              return (
                <Link
                  href={`product/${product.id}`}
                  className={styles.searchentry}
                >
                  <div className={styles.left}>{product.name}</div>
                  <div className={styles.right}>{product.short}</div>
                </Link>
              );
            }
          })}
        </motion.div>
      </motion.form>
      <AnimatePresence>
        {selectDropdown ? (
          <motion.div
            className={styles.selectdropdown}
            onAnimationComplete={() => {
              setSelectACategory(true);
              setCurrCategoryName("");
            }}
            initial={StaggerChildren.parent.off}
            animate={
              selectDropdown
                ? StaggerChildren.parent.on
                : StaggerChildren.parent.off
            }
          >
            <div className={styles.selectleft}>
              {categories.map((category) => {
                return (
                  <motion.div
                    onClick={() => {
                      setCurrCategoryId(category.id);
                      setCurrCategoryName(category.name);
                      setSelectACategory(false);
                      setSelectCategoryLink(category.name);
                    }}
                    className={styles.category}
                    animate={
                      currCategoryName === category.name
                        ? ShadowAnimation.on
                        : ShadowAnimation.off
                    }
                  >
                    {category.name}
                  </motion.div>
                );
              })}
            </div>
            <div className={styles.selectright}>
              {!selectACategory ? (
                subcategories.map((subcategory) => {
                  if (subcategory.categoriesId == currCategoryId) {
                    return (
                      <motion.div className={styles.subcategory}>
                        <div
                          className={styles.subcategoryname}
                          onClick={() => {
                            setSelectCategoryLink(currCategoryName);
                            setSelectSubcategoryLink(subcategory.name);
                          }}
                        >
                          {subcategory.name}
                        </div>
                        <div className={styles.subcategoryentries}>
                          {subcategoriesEntries.map((subcategoriesEntry) => {
                            if (
                              subcategoriesEntry.subcategoriesId ==
                              subcategory.id
                            ) {
                              return (
                                <div
                                  onClick={() => {
                                    setSelectText(subcategoriesEntry.name);
                                    setSelectCategoryLink(currCategoryName);
                                    setSelectSubcategoryLink(subcategory.name);
                                    setSelectEntryLink(subcategoriesEntry.name);
                                  }}
                                  className={styles.entry}
                                >
                                  {subcategoriesEntry.name}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </motion.div>
                    );
                  }
                })
              ) : (
                <div className={styles.selectacategory}>Select a category</div>
              )}
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
