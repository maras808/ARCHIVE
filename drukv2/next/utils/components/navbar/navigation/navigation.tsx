import { getStrapiData } from "@/utils/globals";
import qs from "qs";
import ClientNavigation from "./clientnavigation";

export default async function Navigation() {
  const query = qs.stringify({
    populate: [
      "link",
      "subPages",
      "dropdownImages.image",
      "dropdownImages.link",
    ],
  });

  const pages = await getStrapiData("/api/pages", query);

  return (
    <ClientNavigation
      pages={pages}
      imageBaseUrl={process.env.STRAPI_URL}
    ></ClientNavigation>
  );
}
