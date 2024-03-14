import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.STRAPI_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache({
    typePolicies: ["AboutUs"].reduce(
      (acc, type) => ({ ...acc, [type]: { merge: true } }),
      {}
    ),
  }),
  ssrMode: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export const fetchSVGServerSide = async (src: string): Promise<TrustedHTML> => {
  if (src.slice(-4) !== ".svg") {
    throw new Error("Expected an SVG file");
  }
  return (await fetch(src)).text();
};
