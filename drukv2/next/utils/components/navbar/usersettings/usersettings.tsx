import { MaterialSymbolsAccountCircle } from "@/utils/icones";
import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import DarkMode from "../../darkmode";

export default async function UserSettings() {
  return (
    <Menu isLazy>
      <MenuButton fontSize={"2rem"}>
        <MaterialSymbolsAccountCircle></MaterialSymbolsAccountCircle>
      </MenuButton>
      <MenuList>
        <MenuItem
          closeOnSelect={false}
          _hover={{ bgColor: "inherit", cursor: "auto" }}
        >
          <Text mr={2}>Tryb ciemny</Text>
          <DarkMode></DarkMode>
        </MenuItem>
        {/* <MenuGroup title={userLinks.title}>
          {userLinks.sub_pages.data.map((link: any, index: number) => {
            return (
              <MenuItem key={index}>
                <ChakraLink href={link.href}>{link.displayName}</ChakraLink>
              </MenuItem>
            );
          })}
        </MenuGroup> */}
      </MenuList>
    </Menu>
  );
}
