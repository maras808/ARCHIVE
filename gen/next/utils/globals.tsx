import { Options } from "ky";

export const strapiFetchOptions: Options = {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  cache: "no-store",
};

Object.freeze(strapiFetchOptions);

type PageType = {
  displayName?: string;
  href: string;
};

type PagesType = {
  login: PageType;
  application: PageType;
};

export const pages: PagesType = {
  login: {
    displayName: "Login",
    href: "/login",
  },
  application: {
    href: "/application",
  },
};
