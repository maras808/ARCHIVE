import { Box, Container, Divider, Flex, Spacer } from "@chakra-ui/react";

import Logo from "../logo";
import Navigation from "./navigation";
import UserSettings from "./usersettings";

export default function Navbar() {
  return (
    <Box h={"3rem"} position={"relative"} bgColor={"main.400"}>
      <Container h={"100%"}>
        <Flex h={"100%"} alignItems={"center"}>
          <Logo></Logo>
          <Box mx={8}>
            <Navigation></Navigation>
          </Box>
          <Spacer></Spacer>
          <UserSettings></UserSettings>
        </Flex>
      </Container>
      <Divider></Divider>
    </Box>
  );
}
