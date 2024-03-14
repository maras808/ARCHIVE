import {
  Box,
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CustomCard from "../customcard";
import Metric from "../metric";
import TrafficChart from "./trafficchart";

type DashboardOverviewType = {
  title: string;
  description: string | null;
};

export default function Overview({
  title,
  description,
}: DashboardOverviewType) {
  return (
    <>
      <Flex direction={"column"} gap={8}>
        <Text fontSize={"xl"} as={"b"}>
          {title}
        </Text>
        <Text>{description ? description : "No description"}</Text>
      </Flex>
      <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={4} py={8}>
        <GridItem colSpan={3}>
          <CustomCard title="Your server">
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={2}>
          <CustomCard title="Load">
            <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={2}>
              <GridItem>
                <Box
                  w={"100%"}
                  aspectRatio={1 / 1}
                  bgColor={"dark.200"}
                  borderRadius={2}
                  p={2}
                >
                  <Metric title="CPU" desc="16GB/32GB"></Metric>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  w={"100%"}
                  aspectRatio={1 / 1}
                  bgColor={"dark.200"}
                  borderRadius={2}
                  p={2}
                >
                  <Metric title="RAM" desc="16GB/32GB"></Metric>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  w={"100%"}
                  aspectRatio={1 / 1}
                  bgColor={"dark.200"}
                  borderRadius={2}
                  p={2}
                >
                  <Metric title="IOPS" desc="16GB/32GB"></Metric>
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  w={"100%"}
                  aspectRatio={1 / 1}
                  bgColor={"dark.200"}
                  borderRadius={2}
                  p={2}
                >
                  <Metric title="QWE" desc="16GB/32GB"></Metric>
                </Box>
              </GridItem>
            </Grid>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={3}>
          <CustomCard title="Management">
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={2}>
          <CustomCard title="Configuration">
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={5}>
          <CustomCard title="Metrics">
            <Tabs variant="soft-rounded" colorScheme="primary" isLazy>
              <TabList>
                <Tab>Traffic</Tab>
                <Tab>Traffic</Tab>
              </TabList>
              <TabPanels>
                <TabPanel minH={"24rem"}>
                  <TrafficChart></TrafficChart>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CustomCard>
        </GridItem>
      </Grid>
    </>
  );
}
