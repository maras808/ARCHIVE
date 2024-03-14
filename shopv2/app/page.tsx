import styles from "./page.module.css";
import globals from "./globals.module.css";

import Categories from "@/components/categories/categories";
import Banner from "@/components/banner/banner";
import Recomendations from "@/components/recomendations/recomendations";

export default function Home() {
  return (
    <main className={styles.main}>
      <Categories></Categories>
      <Banner></Banner>
      <Recomendations></Recomendations>
    </main>
  );
}
