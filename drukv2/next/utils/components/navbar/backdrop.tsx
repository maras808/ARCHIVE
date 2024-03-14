import ChakraBox from "../chakrabox";

export default function Backdrop() {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        damping: "40",
        stiffness: "200",
      }}
      backdropFilter={"blur(2px)"}
      bgColor={"#00000050"}
      position={"absolute"}
      inset={0}
      height={"calc(100dvh - 3rem)"}
      top={"3rem"}
    ></ChakraBox>
  );
}
