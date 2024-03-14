import { remove, set } from "./helpers/sa";
import { exists, get, getAll, getMatching } from "./helpers/ssr";

export enum CookieNames {
  hideCookiesPrompt = "hideCookiesPrompt",
  redirectFromRoot = "redirectFromRoot",
}

export default function cookies() {
  return { set, get, getMatching, getAll, exists, remove };
}
