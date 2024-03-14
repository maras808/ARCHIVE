import styles from "./search.module.css";

async function getCategories() {
  const query = await fetch("http://localhost:3000/categories", {
    next: { revalidate: 0 }, //<-- REMOVE TO ADD CASH REVALIDATION
  });
  const response = await query.json();
  return response.res;
}

export default async function Search() {
  const categories = await getCategories();

  return (
    <form className={styles.search}>
      <input
        className={styles.text}
        placeholder="Search..."
        type="text"
        name=""
        id=""
      />
      <select className={styles.select} name="" id="">
        {categories.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select>
      <input
        className={styles.submit}
        value="Submit"
        type="submit"
        name=""
        id=""
      />
    </form>
  );
}
