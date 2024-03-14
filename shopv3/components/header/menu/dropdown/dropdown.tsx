import Heart from "@/components/recomendations/item/heart/heart";
import styles from "./dropdown.module.css";
import { motion } from "framer-motion";

export default function Dropdown(props) {
  const boxVariant = {
    hidden: {},
    visible: {
      transition: {
        when: "beforeChildren", //use this instead of delay
        staggerChildren: 0.2, //apply stagger on the parent tag
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10, //move out of the site
      opacity: 0,
    },
    visible: {
      x: 0, // bring it back to nrmal
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className={styles.dropdown}
      key={props.type}
    >
      <div className={styles.top}>{props.type}</div>
      {props.dropdownItems ? (
        <motion.div
          className={styles.bottom}
          variants={boxVariant}
          animate="visible"
          initial="hidden"
        >
          {props.dropdownItems.map((el) => {
            return (
              <motion.div
                key={el}
                className={styles.entry}
                variants={listVariant}
              >
                {el.productname}
                <Heart></Heart>
              </motion.div>
            );
          })}
          <div className={[styles.entry, styles.custommargin].join(" ")}>
            Show all
          </div>
        </motion.div>
      ) : (
        <div className={styles.entry}>No items yet</div>
      )}
    </motion.div>
  );
}
