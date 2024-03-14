import { SWRConfiguration } from "swr";

export const SWRConfigurationObject: SWRConfiguration = {
  fetcher: (url: string) => fetch(url).then((res) => res.json()),
};
