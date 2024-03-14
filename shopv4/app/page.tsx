import imgs from "@/json/bannerexport.json";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/carousel";
import Recomendations from "@/components/recomendations/recomendations";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Carousel
          imgs={imgs}
          renderNavigator={true}
          renderButtons={true}
          delay={4000}
          autoplay={true}
        ></Carousel>
        <Recomendations></Recomendations>
      </div>
    </div>
  );
}
