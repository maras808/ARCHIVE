import { Box } from "@chakra-ui/react";
import { MinecraftServerConfig, ValheimServerConfig } from "@prisma/client";
import MinecraftSettings from "./minecraftsettings";
import ValheimSettings from "./valheimsettings";

type SettingsType = {
  minecraft: MinecraftServerConfig | null;
  valheim: ValheimServerConfig | null;
};

export default function Settings(server: SettingsType) {
  if (Object.values(server).filter((v) => v !== null).length > 1) {
    return <Box>qqweqwe</Box>;
  }

  if (server.minecraft) {
    return <MinecraftSettings></MinecraftSettings>;
  } else if (server.valheim) {
    return <ValheimSettings></ValheimSettings>;
  } else {
    return <Box>ERR</Box>;
  }
}
