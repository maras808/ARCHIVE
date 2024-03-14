import {
  Button,
  Center,
  Container,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container h={"100dvh"}>
      {/* <Box
        position={"fixed"}
        inset={0}
        opacity={0.08}
        background={"radial-gradient(ellipse at top, #FFFFFF 0%, #141415 70%)"}
        zIndex={-1}
      ></Box> */}
      <Center h={"100%"}>
        <Container maxW={"6xl"}>
          <VStack sx={{ textWrap: "balance" }} textAlign={"center"} spacing={8}>
            <Text fontSize={"4xl"}>
              Discover a new dimension of gaming with our platform!
            </Text>
            <Text fontSize={"xl"}>
              Set up your own game server in minutes, invite friends, and enjoy
              unlimited fun. Our intuitive application allows for quick and easy
              server creation, tailored to meet all your gaming needs.
            </Text>
            <HStack spacing={8}>
              <Link as={NextLink} href="/application/servers">
                <Button colorScheme="primary" size={"lg"} width={"100%"}>
                  Login
                </Button>
              </Link>
              <Link as={NextLink} href="/application/servers">
                <Button
                  colorScheme="primary"
                  variant="outline"
                  size={"lg"}
                  width={"100%"}
                >
                  Register
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Center>
    </Container>
  );
}
