import CategoryAside from "@/components/categoryaside/categoryaside";
import globals from "../globals.module.css";
import styles from "./layout.module.css";

async function getCategories() {
  const query = await fetch("http://localhost:3000/allcategories", {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <div className={styles.categorylayout}>
      <div className={globals.widthwrapper}>
        <div className={styles.categorycontent}>
          <CategoryAside categories={categories}></CategoryAside>
          {children}
        </div>
      </div>
    </div>
  );
}
