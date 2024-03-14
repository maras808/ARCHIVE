import Overview from "@/utils/components/overview/overview";
import Settings from "@/utils/components/settings/settings";
import prisma from "@/utils/prisma/exportclient";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { notFound, redirect } from "next/navigation";

export default async function Servers({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  if (!searchParams?.sid) {
    const firstServer = await prisma.server.findFirst();
    if (firstServer) {
      redirect(`?sid=${firstServer.id}`);
    } else {
      redirect("/no-servers");
    }
  }

  const currentServer = await prisma.server.findUnique({
    where: {
      id: searchParams.sid,
    },
    include: {
      minecraftServerConfig: true,
      valheimServerConfig: true,
    },
  });

  if (!currentServer) {
    notFound();
  }

  return (
    <Box h={"3rem"}>
      <Tabs position="relative" variant="unstyled" h={"100%"}>
        <TabList h={"100%"}>
          <Tab _hover={{ bgColor: "dark.300" }}>Overview</Tab>
          <Tab _hover={{ bgColor: "dark.300" }}>Settings</Tab>
          <Tab _hover={{ bgColor: "dark.300" }}>Groups</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="primary.400"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Overview
              title={currentServer.name}
              description={currentServer.description}
            ></Overview>
          </TabPanel>
          <TabPanel>
            <Settings
              minecraft={currentServer.minecraftServerConfig}
              valheim={currentServer.valheimServerConfig}
            ></Settings>
          </TabPanel>
          <TabPanel>{currentServer.id}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
