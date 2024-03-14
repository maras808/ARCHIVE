"server-only";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

export type GqlResponseContacts = {
  contact: {
    buttons: {
      icon: {
        url: string;
      };
      link: {
        src: string;
      };
    }[];
  };
};

export const getContacts = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseContacts>({
    query: gql`
      query Contact {
        contact {
          buttons {
            icon {
              url
            }
            link {
              src
            }
          }
        }
      }
    `,
  });
};
