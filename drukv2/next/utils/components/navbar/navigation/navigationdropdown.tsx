import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import ChakraBox from "../../chakrabox";
import ChakraLink from "../../chakralink";
import { NavigationContext } from "./clientnavigation";

type NavigationDropdownType = {
  subPages: any;
  children: ReactNode;
};

export default function NavigationDropdown({
  subPages,
  children,
}: NavigationDropdownType) {
  const { setActiveElement } = useContext(NavigationContext);

  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      zIndex={1}
      transition={{
        type: "spring",
        damping: "40",
        stiffness: "200",
      }}
      position={"absolute"}
      top={"100%"}
      left={0}
      right={0}
      bgColor={"main.500"}
    >
      <Box
        h={"100%"}
        w={"100%"}
        onMouseLeave={() => {
          setActiveElement("");
        }}
      >
        <Container>
          <Grid h={"100%"} py={6} gridTemplateColumns={"repeat(3, 1fr)"}>
            <GridItem colSpan={1}>
              <Flex>
                <VStack gap={1}>
                  {subPages.map((subPage: any, index: number) => {
                    return (
                      <ChakraLink key={index} href={subPage.href} mr={4}>
                        {subPage.title}
                      </ChakraLink>
                    );
                  })}
                </VStack>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>{children}</GridItem>
          </Grid>
        </Container>
      </Box>
      <Divider></Divider>
    </ChakraBox>
  );
}
