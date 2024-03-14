import { userSettings } from "@/utils/globals";
import { MaterialSymbolsAccountCircle } from "@/utils/icones";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export default function UserSettings() {
  return (
    <Menu isLazy>
      <MenuButton>
        <MaterialSymbolsAccountCircle
          fontSize={"2rem"}
        ></MaterialSymbolsAccountCircle>
      </MenuButton>
      <MenuList>
        {Object.values(userSettings).map((userSetting, index) => {
          return (
            <>
              <MenuGroup key={index} title={userSetting.groupTitle}>
                <MenuDivider></MenuDivider>
                {userSetting.entries.map((entry, index) => {
                  return <MenuItem key={index}>{entry.title}</MenuItem>;
                })}
              </MenuGroup>
            </>
          );
        })}
      </MenuList>
    </Menu>
  );
}
