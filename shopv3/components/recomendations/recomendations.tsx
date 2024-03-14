import globals from "../../app/globals.module.css";
import styles from "./recomendations.module.css";

import images from "../../json/bannerexport.json";
import Carousel from "../carousel/carousel";
import Item from "./item/item";

async function getProducts() {
  const query = await fetch("http://localhost:3000/allproducts/recomended", {
    next: { revalidate: 0 },
  });
  const response = await query.json();
  console.log(response.res);
  return response.res;
}

export default async function Recomendations() {
  const products = await getProducts();

  return (
    <div className={styles.recomendations}>
      <div className={globals.widthwrapper}>
        <div className={styles.recomendationscontent}>
          <div className={styles.left}>
            <Carousel
              imgs={images}
              renderButtons={false}
              renderNavigator={true}
              autoplay={true}
              delay={4250}
            ></Carousel>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Recomended</div>
            <div className={styles.items}>
              {products.map((el) => {
                return (
                  <Item
                    productname={el.productname}
                    link={"/product/" + el._id}
                    image={"/products/" + el.image + ".jpg"}
                    shortdesc={el.shortdescription}
                    favbutton={true}
                    tags={el.tags}
                    prime={el.prime}
                  ></Item>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
