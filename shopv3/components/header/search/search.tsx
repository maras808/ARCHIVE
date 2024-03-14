import styles from "./search.module.css";
import useSWR from "swr";
import { useState } from "react";
import Item from "@/components/recomendations/item/item";
import { AnimatePresence, motion } from "framer-motion";

// async function getCategories() {
//   const query = await fetch("http://localhost:3000/allcategories", {
//     next: { revalidate: 0 }, //<-- REMOVE TO ADD CASH REVALIDATION
//   });
//   const response = await query.json();
//   return response.res;
// }

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Search() {
  const filterOffset = 2;
  const [filter, setFilter] = useState("");
  const [res, setRes] = useState(true);
  const [focus, setFocus] = useState(false);
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/allproducts",
    fetcher
  );
  const boxVariant = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <form action={"/products/search/" + filter} className={styles.search}>
      <input
        className={styles.text}
        placeholder="Search..."
        type="text"
        name=""
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {/* <select className={styles.select} name="" id="">
        {categories.map((el) => {
          return (
            <option key={el.category} value={el.category}>
              {el.category}
            </option>
          );
        })}
      </select> */}
      <input
        className={styles.submit}
        value="Submit"
        type="submit"
        name=""
        id=""
      />
      <AnimatePresence>
        {filter.length >= filterOffset && focus ? (
          <motion.div
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className={styles.results}
          >
            {isLoading ? (
              <div>loading...</div>
            ) : (
              <div>
                {data.res.map((el) => {
                  if (el.productname.toLowerCase().includes(filter)) {
                    return (
                      <motion.div variants={listVariant}>
                        <Item
                          productname={el.productname}
                          link={"/product/" + el._id}
                          image={"/products/" + el.image + ".jpg"}
                          shortdesc={el.shortdescription}
                          favbutton={true}
                          tags={el.tags}
                          prime={el.prime}
                        ></Item>
                      </motion.div>
                    );
                  }
                })}
              </div>
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </form>
  );
}
