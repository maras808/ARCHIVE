"server-only";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

export type GqlResponseNavbar = {
  navbar: {
    logo: {
      icon: {
        url: string;
      };
    };
    searchbar: {
      placeholder: string;
    };
    navigationEntries: {
      title: string;
      src: string;
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
          logo {
            icon {
              url
            }
          }
          searchbar {
            placeholder
          }
          navigationEntries {
            title
            src
          }
        }
      }
    `,
  });
};
