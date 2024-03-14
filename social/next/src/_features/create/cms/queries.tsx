"server-only";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

export type GqlResponseCreateSharedType = {
  icon: {
    url: string;
  };
  link: {
    src: string;
    title: string;
  };
};

export type GqlResponseCreateType = {
  create: {
    post: {
      shared: GqlResponseCreateSharedType;
    };
    reel: {
      shared: GqlResponseCreateSharedType;
    };
    story: {
      shared: GqlResponseCreateSharedType;
    };
    event: {
      shared: GqlResponseCreateSharedType;
    };
  };
};

export const getCreate = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseCreateType>({
    query: gql`
      query Create {
        create {
          post {
            shared {
              icon {
                url
              }
              link {
                src
                title
              }
            }
          }
          reel {
            shared {
              icon {
                url
              }
              link {
                src
                title
              }
            }
          }
          story {
            shared {
              icon {
                url
              }
              link {
                src
                title
              }
            }
          }
          event {
            shared {
              icon {
                url
              }
              link {
                src
                title
              }
            }
          }
        }
      }
    `,
  });
};
