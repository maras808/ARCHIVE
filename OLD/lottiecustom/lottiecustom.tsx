"use client";

import { DynamicImportType } from "@/src/utils/types";
import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { LottieCustomStaticType } from "./lottiecustomstatic";
export default function LottieCustom({
  suspense,
  ssr,
  ...props
}: LottieCustomStaticType & DynamicImportType) {
  const LottieCustomStatic = dynamic(() => import("./lottiecustomstatic"), {
    loading: () => (suspense ? suspense : null),
    ssr: ssr ? ssr : true,
  });

  const ref = useRef<HTMLDivElement>(null);
  const didIntersect = useInView(ref, { once: true });
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {didIntersect && <LottieCustomStatic {...props}></LottieCustomStatic>}
    </Box>
  );
}

/*
Dynamic imports with didIntersect tactic should only be used when height of the component is known beforehand, e.g setting height with fixed values or storing the component in container, whose height is predetermined by other content. Only use this tactic on very heavy components which block initial load.

Dynamic imports don't work well with ViewTransitions API because they don't animete in since CSS modules are lazy-loaded
*/
