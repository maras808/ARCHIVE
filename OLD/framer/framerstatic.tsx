"use client";

import { Box, BoxProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

export type FramerStaticType = {
  children: ReactNode;
} & BoxProps &
  MotionProps;

export default function FramerStatic({ children, ...props }: FramerStaticType) {
  return (
    <Box component={motion.div} {...props}>
      {children}
    </Box>
  );
}
