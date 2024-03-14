import { Text } from "@chakra-ui/react";

type UserSettingType = {
  groupTitle: string;
  entries: {
    title: JSX.Element;
    href: string;
  }[];
};

type UserSettingsType = {
  one: UserSettingType;
};

export const userSettings: UserSettingsType = {
  one: {
    groupTitle: "title",
    entries: [
      {
        title: <Text>"title2"</Text>,
        href: "2",
      },
    ],
  },
};

Object.freeze(userSettings);

export type NavigationRouteType = {
  displayName: string;
  href: string;
};

type NavigationRoutesType = {
  shop: NavigationRouteType;
  aboutUs: NavigationRouteType;
};

export const navigationRoutes: NavigationRoutesType = {
  shop: {
    displayName: "Sklep",
    href: "",
  },
  aboutUs: {
    displayName: "O nas",
    href: "",
  },
};

Object.freeze(navigationRoutes);
