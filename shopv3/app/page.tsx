import styles from "./page.module.css";
import globals from "./globals.module.css";
import Banner from "@/components/banner/banner";
import Recomendations from "@/components/recomendations/recomendations";
import Categories from "@/components/categories/categories";

export default function Home() {
  return (
    <main className={styles.main}>
      <Categories></Categories>
      <Banner></Banner>
      <Recomendations></Recomendations>
    </main>
  );
}
