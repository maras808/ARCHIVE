import {
  MaterialSymbolsAccountCircle,
  MaterialSymbolsExitToApp,
} from "@/utils/icones";
import pages from "@/utils/pages";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import CustomDropdown from "../customdropdown";
import Logo from "../logo";

export default function Navbar() {
  return (
    <Container h={"5rem"}>
      <Flex align={"center"} h={"100%"}>
        <Box mr={32}>
          <Logo></Logo>
        </Box>
        <HStack spacing={8}>
          {pages
            .filter((page) => page.type === "MISC")
            .map((page, index) => {
              return (
                <Link
                  as={NextLink}
                  href={`${page.href}?ts=${Date.now()}`}
                  color={"text"}
                  _hover={{ color: "text" }}
                  key={index}
                >
                  {page.displayedName}
                </Link>
              );
            })}
          <CustomDropdown
            mainDisplay={<Text>Company</Text>}
            hasArrow
            menuList={
              <MenuList>
                {pages
                  .filter((page) => page.type === "COMPANY")
                  .map((page, index) => {
                    return (
                      <Link as={NextLink} href={page.href} key={index}>
                        <MenuItem>{page.displayedName}</MenuItem>
                      </Link>
                    );
                  })}
              </MenuList>
            }
          ></CustomDropdown>
        </HStack>
        <Spacer></Spacer>
        <HStack>
          <CustomDropdown
            mainDisplay={
              <Box fontSize={"2rem"}>
                <MaterialSymbolsAccountCircle></MaterialSymbolsAccountCircle>
              </Box>
            }
            menuList={
              <MenuList>
                <MenuGroup title="User">
                  {pages
                    .filter((page) => page.type === "USER")
                    .map((page, index) => {
                      return (
                        <Link as={NextLink} href={page.href} key={index}>
                          <MenuItem icon={page.icon}>
                            {page.displayedName}
                          </MenuItem>
                        </Link>
                      );
                    })}
                  <MenuItem
                    icon={<MaterialSymbolsExitToApp></MaterialSymbolsExitToApp>}
                  >
                    Log out
                  </MenuItem>
                </MenuGroup>
                <MenuDivider></MenuDivider>
              </MenuList>
            }
          ></CustomDropdown>
        </HStack>
      </Flex>
    </Container>
  );
}
