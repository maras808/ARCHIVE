import { Box, Container, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useContext } from "react";
import { NavigationContext } from "./navigation";

type NavbarDropdownType = {
  children: ReactNode;
};

export default function NavbarDropdown({ children }: NavbarDropdownType) {
  const { setIsActive } = useContext(NavigationContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
      }}
      style={{
        height: "3rem",
        position: "absolute",
        zIndex: 1,
        top: "100%",
        left: 0,
        right: 0,
      }}
    >
      <Box
        bgColor={"main.400"}
        h={"100%"}
        onMouseLeave={() => setIsActive(false)}
      >
        <Container h={"100%"}>{children}</Container>
        <Divider></Divider>
      </Box>
    </motion.div>
  );
}
