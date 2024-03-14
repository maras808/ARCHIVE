"use client";

import { navigationRoutes } from "@/utils/globals";
import { HStack } from "@chakra-ui/react";
import { createContext, useState } from "react";
import NavigationEntry from "./navigationentry";

export const NavigationContext = createContext<any>(null);

export default function Navigation() {
  const [isActive, setIsActive] = useState<string>("");

  return (
    <NavigationContext.Provider value={{ isActive, setIsActive }}>
      <HStack>
        <NavigationEntry entry={navigationRoutes.shop}>asd</NavigationEntry>
        <NavigationEntry entry={navigationRoutes.aboutUs}>qwe</NavigationEntry>
      </HStack>
    </NavigationContext.Provider>
  );
}
