import { Box, Flex } from "@chakra-ui/react";
import prisma from "../../prisma/exportclient";
import CreateServerButton from "../createserverbutton/createserverbutton";
import Entry from "./entry";

export default async function ServersSideNav() {
  const servers = await prisma.server.findMany();

  return (
    <Box minW={64}>
      <Flex direction={"column"} position={"sticky"} top={0}>
        <Box h={"3rem"}>
          <CreateServerButton></CreateServerButton>
        </Box>
        <Flex
          direction={"column"}
          gap={8}
          h={"calc(100dvh - 2rem - 10rem)"}
          pr={2}
          py={2}
          my={8}
        >
          <Flex direction={"column"} gap={4}>
            <Flex direction={"column"} gap={2}>
              {servers.map((server, index) => {
                return <Entry server={server} key={index}></Entry>;
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
