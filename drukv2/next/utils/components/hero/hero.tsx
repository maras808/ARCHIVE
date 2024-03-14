import { getStrapiData } from "@/utils/globals";
import qs from "qs";

export default async function Hero() {
  const query = qs.stringify({
    populate: "buttons",
  });

  const hero: any = await getStrapiData("/api/hero", query);
  return <></>;
}
/*<Container h={"100dvh"}>
      <Container maxW={"50rem"} h={"100%"} marginLeft={0} px={0}>
        <Center h={"100%"}>
          <Flex direction={"column"} gap={4}>
            <Flex direction={"column"} gap={2}>
              <Text fontSize={"4xl"}>
                <b>{hero.data.title}</b>
              </Text>
              <Text>{hero.data.description}</Text>
            </Flex>
            <HStack gap={2}>
              {hero.data.buttons.map((button: any) => {
                if (button.isMain) {
                  return (
                    <ChakraLink href="/a">
                      <Button>Sklep</Button>
                    </ChakraLink>
                  );
                } else {
                  return (
                    <ChakraLink href="/a">
                      <Button
                        variant={"outline"}
                        color={"text"}
                        _hover={{ color: "textDark", bgColor: "text" }}
                      >
                        Więcej o nas
                      </Button>
                    </ChakraLink>
                  );
                }
              })}
            </HStack>
          </Flex>
        </Center>
      </Container>
    </Container>*/
