import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}`,
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/uslugi`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/uslugi/komputery`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/uslugi/oprogramowanie`,
      priority: 0.8
    },
  ]
}