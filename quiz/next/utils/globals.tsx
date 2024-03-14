import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import ky from "ky";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.STRAPI_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
});

export const fetchSVGServerSide = async (src: string) => {
  // if (src.slice(-4) !== ".svg") {
  //   throw new Error("Expected SVG file");
  // }
  return await ky.get(src).text();
};
