"use client";

import { Box, BoxProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

export type FramerType = {
  children?: ReactNode;
} & BoxProps &
  MotionProps;

export default function Framer({ children, ...props }: FramerType) {
  return (
    <Box component={motion.div} {...props}>
      {children}
    </Box>
  );
}
