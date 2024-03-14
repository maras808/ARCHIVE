"use client";

import CustomLink from "@/src/components/customlink";
import cookies, { CookieNames } from "@/src/utils/cookies/cookies";
import { Button } from "@mui/material";

type ButtonClientType = {
  href: string;
  children: string;
};

export default function ButtonClient({ href, children }: ButtonClientType) {
  const { set } = cookies();
  return (
    <CustomLink href={href}>
      <Button
        variant={"outlined"}
        size="large"
        onClick={() =>
          set({ name: CookieNames.redirectFromRoot, value: "true" })
        }
      >
        {children}
      </Button>
    </CustomLink>
  );
}
