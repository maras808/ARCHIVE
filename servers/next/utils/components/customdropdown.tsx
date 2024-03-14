"use client";

import { Box, Flex, Menu, MenuButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MaterialSymbolsArrowForwardIos } from "../icones";

type CustomDropdownType = {
  mainDisplay: JSX.Element;
  menuList: JSX.Element;
  hasArrow?: true;
};

export default function CustomDropdown({
  mainDisplay,
  menuList,
  hasArrow,
}: CustomDropdownType) {
  return (
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton>
            <Flex align={"center"}>
              {mainDisplay}
              {hasArrow && (
                <Box ml={"3px"}>
                  <motion.div
                    initial={{
                      transform: "rotate(90deg)",
                    }}
                    animate={
                      isOpen
                        ? { transform: "rotate(-90deg)" }
                        : { transform: "rotate(90deg)" }
                    }
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 200,
                    }}
                  >
                    <MaterialSymbolsArrowForwardIos></MaterialSymbolsArrowForwardIos>
                  </motion.div>
                </Box>
              )}
            </Flex>
          </MenuButton>
          {menuList}
        </>
      )}
    </Menu>
  );
}
