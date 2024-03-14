import { Inter, Montserrat, Rubik } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin-ext"],
  display: "swap",
  fallback: ["montserrat"],
});

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
  fallback: ["inter"],
});

export const inter = Inter({ subsets: ["latin-ext"], display: "swap" });
