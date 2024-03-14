"use client";

import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ModalCloseType = {
  children: ReactNode;
} & ButtonProps;

export default function ModalClose({ children, ...props }: ModalCloseType) {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.back();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
