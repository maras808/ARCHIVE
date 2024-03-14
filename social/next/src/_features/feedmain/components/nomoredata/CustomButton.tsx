"use client";

import { Button } from "@mui/material";

type CustomButtonType = {
  children: string;
};

export default function CustomButton({ children }: CustomButtonType) {
  return (
    <Button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {children}
    </Button>
  );
}
