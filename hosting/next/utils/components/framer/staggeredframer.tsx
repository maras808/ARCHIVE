"use client";

import { Box, BoxProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type StaggeredFramerType = {
  children: ReactNode;
} & BoxProps &
  MotionProps;
export default function StaggeredFramer({
  children,
  ...props
}: StaggeredFramerType) {
  return (
    <Box component={motion.div} {...props}>
      {children}
    </Box>
  );
}
