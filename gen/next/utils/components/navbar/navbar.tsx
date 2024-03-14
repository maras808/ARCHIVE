import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import Logo from "./logo";

export default function Navbar() {
  return (
    <Box h={"3rem"}>
      <Container h={"100%"}>
        <Flex alignItems={"center"} h={"100%"}>
          <HStack>
            <Logo></Logo>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
