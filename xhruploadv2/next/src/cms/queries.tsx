"server-only";

import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";
import { apolloClient } from "../lib/apollo";

export const getDangerousSVG = async (src: string): Promise<TrustedHTML> => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-svg");
  if (src.slice(-4) !== ".svg") {
    throw new Error("Expected an SVG file");
  }
  if (!process.env.STRAPI_URL) {
    throw new Error("No Strapi URL provided");
  }
  return (await fetch(`${process.env.STRAPI_URL}${src}`)).text();
};

type GqlResponseNavbar = {
  navbar: {
    icon: {
      icon: {
        url: string;
      };
      href: {
        value: string;
      };
    }[];
  };
};

export const getNavbar = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-navbar");
  return await apolloClient.query<GqlResponseNavbar>({
    query: gql`
      query Navbar {
        navbar {
          icon {
            icon {
              url
            }
            href {
              value
            }
          }
        }
      }
    `,
  });
};

type GqlResponseCookiesPrompt = {
  cookiesPrompt: {
    text: string;
    icon: {
      url: string;
    };
  };
};

export const getCookiesPrompt = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-cookies-prompt");
  return await apolloClient.query<GqlResponseCookiesPrompt>({
    query: gql`
      query CookiesPrompt {
        cookiesPrompt {
          text
          icon {
            url
          }
        }
      }
    `,
  });
};
