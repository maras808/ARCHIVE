"server-only";

import { apolloClient } from "@/src/lib/apollo/apollo";
import { gql } from "@apollo/client";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

type GqlResponseModalButton = {
  modalButton: {
    icon: {
      url: string;
    };
  };
};

export const getModalButton = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseModalButton>({
    query: gql`
      query ModalButton {
        modalButton {
          icon {
            url
          }
        }
      }
    `,
  });
};

export type GqlResponseCreatePostType = {
  create: {
    post: {
      shared: {
        title: string;
      };
    };
  };
};

export const getCreatePost = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseCreatePostType>({
    query: gql`
      query Create {
        create {
          post {
            shared {
              title
            }
          }
        }
      }
    `,
  });
};

export type GqlResponseCreateReelType = {
  create: {
    reel: {
      shared: {
        title: string;
      };
    };
  };
};

export const getCreateReel = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseCreateReelType>({
    query: gql`
      query Create {
        create {
          reel {
            shared {
              title
            }
          }
        }
      }
    `,
  });
};

export type GqlResponseCreateStoryType = {
  create: {
    story: {
      shared: {
        title: string;
      };
    };
  };
};

export const getCreateStory = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseCreateStoryType>({
    query: gql`
      query Create {
        create {
          story {
            shared {
              title
            }
          }
        }
      }
    `,
  });
};

export type GqlResponseCreateEventType = {
  create: {
    event: {
      shared: {
        title: string;
      };
    };
  };
};

export const getCreateEvent = async () => {
  "use cache";
  unstable_cacheLife("seconds");
  unstable_cacheTag("gql-aside");
  return await apolloClient.query<GqlResponseCreateEventType>({
    query: gql`
      query Create {
        create {
          event {
            shared {
              title
            }
          }
        }
      }
    `,
  });
};
