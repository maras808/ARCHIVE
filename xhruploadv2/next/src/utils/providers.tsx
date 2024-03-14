"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ViewTransitions } from "next-view-transitions";
import { ReactNode } from "react";
import { apolloClient } from "../lib/apollo";
import theme from "./theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <AppRouterCacheProvider>
          <ViewTransitions>{children}</ViewTransitions>
        </AppRouterCacheProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
