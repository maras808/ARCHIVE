"server-only";
"use cache";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

type GqlResponseNoMoreData = {
  mainFeed: {
    noMoreData: {
      title: string;
      buttonTitle: string;
    };
  };
};

export const getNoMoreData = async () => {
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-mainFeed-noMoreData");
  return await apolloClient.query<GqlResponseNoMoreData>({
    query: gql`
      query MainFeed {
        mainFeed {
          noMoreData {
            title
            buttonTitle
          }
        }
      }
    `,
  });
};

type GqlResponseFollowMore = {
  mainFeed: {
    followMore: {
      button: {
        src: string;
        title: string;
      };
      title: string;
    };
  };
};

export const getFollowMore = async () => {
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-mainFeed-followMore");
  return await apolloClient.query<GqlResponseFollowMore>({
    query: gql`
      query MainFeed {
        mainFeed {
          followMore {
            button {
              src
              title
            }
            title
          }
        }
      }
    `,
  });
};
