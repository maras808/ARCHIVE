"use client";

import { Box, BoxProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";

export default function Framer(props: BoxProps & MotionProps) {
  return (
    <Box component={motion.div} {...props}>
      {props.children}
    </Box>
  );
}
