import ky, { Options } from "ky";

export const strapiFetchOptions: Options = {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  cache: process.env.NODE_ENV === "production" ? "default" : "no-store",
};

Object.freeze(strapiFetchOptions);

export async function getStrapiData(path: string, qsQuery?: string) {
  const url = new URL(path, process.env.STRAPI_URL);
  qsQuery && (url.search = qsQuery);

  try {
    return await ky.get(url.href, strapiFetchOptions).json();
  } catch (error) {
    console.error(error);
  }
}
