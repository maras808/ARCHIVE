"use client";

import { MdiLaunch } from "@/utils/icones";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createContext, useState } from "react";
import ChakraLink from "../../chakralink";
import Backdrop from "../backdrop";
import NavigationEntry from "./navigationentry";

type ClientNavigationType = {
  pages: any;
  imageBaseUrl: string | undefined;
};

export const NavigationContext = createContext<any>("");

export default function ClientNavigation({
  pages,
  imageBaseUrl,
}: ClientNavigationType) {
  if (!imageBaseUrl) {
    throw new Error("Internal server error");
  }

  const [activeElement, setActiveElement] = useState<string>("");

  return (
    <Flex
      alignItems={"center"}
      h={"100%"}
      onMouseLeave={() => setActiveElement("")}
    >
      <NavigationContext.Provider value={{ activeElement, setActiveElement }}>
        <HStack spacing={6}>
          {pages.data.map((page: any, index: number) => {
            return (
              <NavigationEntry key={index} entry={page}>
                <Flex w={"100%"} gap={4}>
                  {page.dropdownImages.map(
                    (dropdownImage: any, index: number) => {
                      return (
                        <Flex key={index} flex={1} direction={"column"} gap={2}>
                          <Box h={"16rem"} position={"relative"} w={"100%"}>
                            <Image
                              src={`${imageBaseUrl}${dropdownImage.image.url}`}
                              alt={dropdownImage.image.alternativeText}
                              fill
                            ></Image>
                          </Box>
                          <Flex>
                            {dropdownImage.link.href && (
                              <ChakraLink href={dropdownImage.link.href}>
                                <HStack gap={2}>
                                  <Text>{dropdownImage.link.title}</Text>
                                  <MdiLaunch></MdiLaunch>
                                </HStack>
                              </ChakraLink>
                            )}
                          </Flex>
                        </Flex>
                      );
                    }
                  )}
                </Flex>
              </NavigationEntry>
            );
          })}
        </HStack>
      </NavigationContext.Provider>
      <AnimatePresence>
        {activeElement && <Backdrop></Backdrop>}
      </AnimatePresence>
    </Flex>
  );
}
