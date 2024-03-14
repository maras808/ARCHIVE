"use client";

import { DynamicImportType } from "@/src/utils/types";
import dynamic from "next/dynamic";
import { FramerStaticType } from "./framerstatic";
export default function Framer({
  children,
  suspense,
  ssr,
  ...props
}: FramerStaticType & DynamicImportType) {
  const FramerStatic = dynamic(() => import("./framerstatic"), {
    loading: () => (suspense ? suspense : null),
    ssr: ssr ? ssr : true,
  });
  return <FramerStatic {...props}>{children}</FramerStatic>;
}
