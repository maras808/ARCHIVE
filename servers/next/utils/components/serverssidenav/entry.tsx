import { Box, Card, CardBody, Flex, Link, Text } from "@chakra-ui/react";
import { Server, ServerState } from "@prisma/client";
import NextLink from "next/link";

type EntryProps = {
  server: Server;
};

export default function Entry({ server }: EntryProps) {
  let currentColor: "green.300" | "orange.300" | "red.300";
  switch (server.state) {
    case ServerState.RUNNING:
      currentColor = "green.300";
      break;
    case ServerState.STOPPED:
      currentColor = "orange.300";
      break;
    case ServerState.BROKEN:
      currentColor = "red.300";
      break;
    default:
      currentColor = "red.300";
      break;
  }
  return (
    <Link as={NextLink} href={`/application/servers?sid=${server.id}`}>
      <Card bgColor={"dark.300"} color={"text"}>
        <CardBody p={4}>
          <Flex direction={"column"} gap={2}>
            <Flex direction={"column"} gap={0}>
              <Text>{server.name}</Text>
              <Text color={currentColor} textTransform={"capitalize"}>
                {server.state.toLowerCase()}
              </Text>
            </Flex>
            <Box h={"2px"} w={"100%"} bgColor={"red"}></Box>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}
