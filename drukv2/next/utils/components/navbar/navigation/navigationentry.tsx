import { MaterialSymbolsArrowBackIosNewRounded } from "@/utils/icones";
import { HStack, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useContext } from "react";
import ChakraBox from "../../chakrabox";
import ChakraLink from "../../chakralink";
import { NavigationContext } from "./clientnavigation";
import NavigationDropdown from "./navigationdropdown";

type NavigationEntryType = {
  entry: any;
  children: ReactNode;
};

export default function NavigationEntry({
  entry,
  children,
}: NavigationEntryType) {
  const { activeElement, setActiveElement } = useContext(NavigationContext);

  const isActive = activeElement === entry.link.title;

  return (
    <>
      {entry.isDropdown ? (
        <HStack
          onClick={() => {
            isActive
              ? setActiveElement("")
              : setActiveElement(entry.link.title);
          }}
          cursor={"pointer"}
          gap={1}
        >
          <Text>{entry.link.title}</Text>
          <ChakraBox
            initial={{ transform: "rotate(-90deg)" }}
            animate={
              isActive
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(-90deg)" }
            }
            transition={{
              type: "spring",
              damping: "20",
              stiffness: "200",
            }}
          >
            <MaterialSymbolsArrowBackIosNewRounded></MaterialSymbolsArrowBackIosNewRounded>
          </ChakraBox>
        </HStack>
      ) : (
        <ChakraLink
          href={entry.link.href}
          color={"text"}
          _hover={{ color: "text" }}
        >
          {entry.link.title}
        </ChakraLink>
      )}
      <AnimatePresence>
        {isActive && (
          <NavigationDropdown subPages={entry.subPages}>
            {children}
          </NavigationDropdown>
        )}
      </AnimatePresence>
    </>
  );
}
