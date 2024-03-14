import { BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import { ReactElement, ReactNode } from "react";
import RootLazyFramer from "./rootlazyframer";
import StaggeredFramer from "./staggeredframer";

type FramerType = {
  dynamicSuspense?: ReactElement;
  children: ReactNode;
} & BoxProps &
  MotionProps;

export default function Framer({
  dynamicSuspense,
  children,
  ...props
}: FramerType) {
  return dynamicSuspense ? (
    <RootLazyFramer dynamicSuspense={dynamicSuspense} {...props}>
      {children}
    </RootLazyFramer>
  ) : (
    <StaggeredFramer {...props}>{children}</StaggeredFramer>
  );
}
