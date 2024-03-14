import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 200,
      }}
      style={{
        backgroundColor: "#00000050",
        position: "absolute",
        height: "calc(100dvh - 3rem)",
        inset: 0,
        top: "3rem",
        backdropFilter: "blur(2px)",
      }}
    ></motion.div>
  );
}
