import { MaterialSymbolsSettings } from "./icones";

type PagesType = {
  type: "COMPANY" | "MISC" | "USER";
  href: string;
  displayedName: string;
  icon?: JSX.Element;
};

const pages: PagesType[] = [
  {
    type: "MISC",
    displayedName: "Servers",
    href: "/application/servers",
  },
  {
    type: "COMPANY",
    displayedName: "About us",
    href: "/application/about-us",
  },
  {
    type: "USER",
    displayedName: "Settings",
    href: "/application/settings",
    icon: <MaterialSymbolsSettings></MaterialSymbolsSettings>,
  },
];

Object.freeze(pages);

export default pages;
