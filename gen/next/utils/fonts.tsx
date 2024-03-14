import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: "400",
  fallback: ["roboto", "system-ui", "arial"],
  adjustFontFallback: false,
});
