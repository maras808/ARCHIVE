"use client";

import { Switch, useColorMode } from "@chakra-ui/react";

export default function DarkMode() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={(e) => {
        e.target.checked ? setColorMode("dark") : setColorMode("light");
      }}
    ></Switch>
  );
}
