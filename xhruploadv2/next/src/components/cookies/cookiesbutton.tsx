"use client";

import cookies, { CookieNames } from "@/src/utils/cookies/cookies";
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type CookiesButtonType = {
  children: ReactNode;
} & ButtonProps;

export default function CookiesButton({
  children,
  ...props
}: CookiesButtonType) {
  const { set } = cookies();

  return (
    <Button
      onClick={async () =>
        await set({
          name: CookieNames.hideCookiesPrompt,
          value: "true",
        })
      }
      {...props}
    >
      {children}
    </Button>
  );
}
