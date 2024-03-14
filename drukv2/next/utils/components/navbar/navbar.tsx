import {
  Box,
  Container,
  Divider,
  Flex,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";
import { Suspense } from "react";
import Logo from "../logo";
import Navigation from "./navigation/navigation";
import UserSettings from "./usersettings/usersettings";

export default function Navbar() {
  return (
    <Box h={"3rem"} position={"sticky"} top={0} bgColor={"main.400"}>
      <Container h={"100%"}>
        <Flex h={"100%"} alignItems={"center"}>
          <Logo isText></Logo>
          <Box mx={8} flexGrow={1} h={"100%"}>
            <Suspense
              fallback={
                <Stack p={2} h={"100%"}>
                  <Skeleton height="50%" />
                  <Skeleton height="50%" />
                </Stack>
              }
            >
              <Navigation></Navigation>
            </Suspense>
          </Box>
          <Suspense fallback={<SkeletonCircle size={"8"} />}>
            <UserSettings></UserSettings>
          </Suspense>
        </Flex>
      </Container>
      <Divider></Divider>
    </Box>
  );
}
