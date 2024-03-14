import Item from "@/components/recomendations/item/item";
import styles from "./page.module.css";

async function getCategories(id) {
  const query = await fetch("http://localhost:3000/allcategories/" + id, {
    next: { revalidate: 10 },
  });
  const response = await query.json();
  return response.res;
}

export default async function Category({ params }: { params: { id } }) {
  const category = await getCategories(params.id);
  return (
    <div className={styles.category}>
      {category.map((wrapper) => {
        return wrapper.products.map((el) => {
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
        });
      })}
    </div>
  );
}
