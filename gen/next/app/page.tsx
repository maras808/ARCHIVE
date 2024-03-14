import Logo from "@/utils/components/navbar/logo";
import { pages } from "@/utils/globals";
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default async function Home() {
  // const landing = await ky
  //   .get(`${process.env.STRAPI_URL}/api/landing-text`, strapiFetchOptions)
  //   .json<APIResponse<"api::landing-text.landing-text">>();

  return (
    <Box h={"100dvh"}>
      <Container h={"100%"}>
        <Center h={"100%"}>
          <VStack spacing={6}>
            <VStack spacing={4}>
              <Logo></Logo>
              <Text fontSize={"3xl"} textAlign={"center"}>
                Create beautiful images for your streaks
              </Text>
            </VStack>
            <HStack spacing={2}>
              <Link as={NextLink} href={pages.login.href}>
                <Button fontSize={"xl"}>{pages.login.displayName}</Button>
              </Link>
              <Link as={NextLink} href={pages.application.href}>
                <Button fontSize={"xl"}>Contiune as guest</Button>
              </Link>
            </HStack>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
}
