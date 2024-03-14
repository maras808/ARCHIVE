import { apolloClient } from "@/src/lib/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

type GqlResponseTitle = {
  home: {
    title: string;
  };
};

export const getTitle = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-home-title");
  return await apolloClient.query<GqlResponseTitle>({
    query: gql`
      query Home {
        home {
          title
        }
      }
    `,
  });
};

type GqlResponseDescription = {
  home: {
    description: string;
  };
};

export const getDescription = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-home-description");
  return await apolloClient.query<GqlResponseDescription>({
    query: gql`
      query Home {
        home {
          description
        }
      }
    `,
  });
};

type GqlResponseButton = {
  home: {
    button: {
      name: string;
      href: {
        value: string;
      };
    };
  };
};

export const getButton = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-home-button");
  return await apolloClient.query<GqlResponseButton>({
    query: gql`
      query Home {
        home {
          button {
            name
            href {
              value
            }
          }
        }
      }
    `,
  });
};
