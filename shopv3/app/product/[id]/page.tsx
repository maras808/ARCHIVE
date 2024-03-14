import Heart from "@/components/recomendations/item/heart/heart";
import Link from "next/link";
import globals from "../../globals.module.css";
import styles from "./page.module.css";

async function getProducts(id) {
  const query = await fetch("http://localhost:3000/allproducts/" + id, {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Product({ params }: { params: { id } }) {
  const product = await getProducts(params.id);
  return (
    <div className={styles.product}>
      <div className={globals.widthwrapper}>
        <div className={styles.productcontent}>
          {product.map((el) => {
            return (
              <div className={styles.entry}>
                <div className={styles.showcase}>
                  <img
                    className={styles.imgae}
                    src={"/products/" + el.image + ".jpg"}
                    alt=""
                  />
                  <div className={styles.name}>{el.productname}</div>
                </div>
                <div className={styles.desc}>
                  <div className={styles.tags}>
                    {el.tags.map((tag) => {
                      return <div className={styles.tag}>#{tag}</div>;
                    })}
                  </div>
                  <div className={styles.descfromdb}>{el.longdescription}</div>
                  <div className={styles.buttons}>
                    <Link href={el.link} className={styles.afflink}>
                      Check out the product
                    </Link>
                    <Heart></Heart>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
