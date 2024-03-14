import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.STRAPI_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
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
