import Item from "@/components/recomendations/item/item";
import styles from "./page.module.css";

async function getCategories(name) {
  const query = await fetch("http://localhost:3000/allproducts/name/" + name, {
    next: { revalidate: 0 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Category({ params }: { params: { name } }) {
  const category = await getCategories(params.name);
  console.log(category);
  return (
    <div className={styles.category}>
      {category.map((el) => {
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
  );
}
