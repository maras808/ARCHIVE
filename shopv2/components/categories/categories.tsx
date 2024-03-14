import styles from "./categories.module.css";
import globals from "../../app/globals.module.css";
import CategorieElement from "../categorieelements/categorieelement";
import { BsReplyAll, BsBook } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineHome } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";

async function getCategories() {
  const query = await fetch("http://localhost:3000/categories", {
    next: { revalidate: 0 }, //<-- REMOVE TO ADD CACHE REVALIDATION
  });
  const response = await query.json();
  return response.res;
}

export default async function Categories() {
  const categories = await getCategories();
  return (
    <div className={styles.categories}>
      <div className={globals.widthwrapper}>
        <div className={styles.categorylist}>
          {categories.map((category) => {
            return (
              <CategorieElement desc={category.name}>
                {category.subcategories.map((el) => {
                  return <div className={styles.subcategories}>{el}</div>;
                })}
              </CategorieElement>
            );
          })}
          {/* <CategorieElement desc="All categories" index="1">
            <BsReplyAll></BsReplyAll>
          </CategorieElement>
          <CategorieElement desc="Elecrtonics" index="2">
            <AiOutlineLaptop></AiOutlineLaptop>
          </CategorieElement>
          <CategorieElement desc="Wear" index="3">
            <GiRunningShoe></GiRunningShoe>
          </CategorieElement>
          <CategorieElement desc="Entertaiment" index="4">
            <BsBook></BsBook>
          </CategorieElement>
          <CategorieElement desc="Home" index="5">
            <AiOutlineHome></AiOutlineHome>
          </CategorieElement> */}
        </div>
      </div>
    </div>
  );
}
