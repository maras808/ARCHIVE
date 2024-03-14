import styles from "./tile.module.css";
import { motion } from "framer-motion";

export default function Tile(props: any) {
  return (
    <motion.div
      style={props.style}
      initial={props.initial}
      whileInView={props.whileInView}
      transition={{ duration: props.duration, delay: props.delay }}
      className={styles.tile}
    >
      {props.children}
    </motion.div>
  );
}
