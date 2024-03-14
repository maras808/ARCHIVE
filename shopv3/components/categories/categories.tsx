import styles from "./categories.module.css";
import globals from "../../app/globals.module.css";
import CategoryElement from "./categoryelement/categoryelement";

async function getCategories() {
  const query = await fetch("http://localhost:3000/allcategories", {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className={styles.categories}>
      <div className={globals.widthwrapper}>
        <div className={styles.categoriescontent}>
          {categories.map((el) => {
            return (
              <CategoryElement
                category={el.category}
                icon={el.icon}
                subcategories={el.subcategories}
              ></CategoryElement>
            );
          })}
        </div>
      </div>
    </div>
  );
}
