"server-only";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

export type GqlResponseAside = {
  aside: {
    entries: {
      link: {
        src: string;
        title: string;
      };
      icon: {
        url: string;
      };
    }[];
  };
};

export const getAside = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseAside>({
    query: gql`
      query Aside {
        aside {
          entries {
            link {
              src
              title
            }
            icon {
              url
            }
          }
        }
      }
    `,
  });
};
