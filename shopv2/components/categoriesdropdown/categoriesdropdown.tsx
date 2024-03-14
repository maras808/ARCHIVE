import styles from "./categoriesdropdown.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoriesDropdown(props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.categoriesdropdown}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
