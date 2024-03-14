"use client";

import { Box, BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode } from "react";

type RootLazyFramerType = {
  dynamicSuspense: ReactElement;
  children: ReactNode;
} & BoxProps &
  MotionProps;

export default function RootLazyFramer({
  dynamicSuspense,
  children,
  ...props
}: RootLazyFramerType) {
  const DynamicFramer = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    {
      ssr: false,
      loading: () => dynamicSuspense,
    }
  );
  return (
    <Box component={DynamicFramer} {...props}>
      {children}
    </Box>
  );
}
