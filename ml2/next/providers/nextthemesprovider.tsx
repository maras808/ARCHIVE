"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface nextThemesProviderProps {
  children: ReactNode;
}

export default function NextThemesProvider({
  children,
}: nextThemesProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
