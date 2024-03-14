import styles from "./header.module.css";

export default function Search() {
  return (
    <form className={styles.search}>
      <input
        className={styles.text}
        placeholder="Search..."
        type="text"
        name=""
        id=""
      />
      <div className={styles.border}></div>
      <select className={styles.select} name="" id="">
        <option value="0">Categories</option>
        <option value="1">Phones</option>
        <option value="2">Sportsware</option>
        <option value="3">yo</option>
        <option value="4">test</option>
      </select>
      <div className={styles.border}></div>
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
