"use client";

import { DynamicImportType } from "@/src/utils/types";
import dynamic from "next/dynamic";
import { TypewriterStaticType } from "./typewriterstatic";
export default function Typewriter({
  children,
  suspense,
  ssr,
  ...props
}: TypewriterStaticType & DynamicImportType) {
  const TypewriterStatic = dynamic(() => import("./typewriterstatic"), {
    loading: () => (suspense ? suspense : null),
    ssr: ssr ? ssr : true,
  });
  return <TypewriterStatic {...props}>{children}</TypewriterStatic>;
}

/*
If suspense is provided the component is not preloaded on the server
and during it's hydration on the client the suspense is shown.
New dynamic component (with provided suspense) introduces new suspence, thus creating a new loading state when returned component is downloading or hydrating.
You can still use the dynamic variants without providing a suspense to lazily or dynamicly load the component with server preload.
Static imports are usefull when children components depend on parent's component state - e.g. when using nested Framers to ensure they stagger proprely. When doing this, most outer dynamic parent's suspense is shown until all static imports's hydrations are resolved. New dynamic Framer can be introduced down the tree to break the suspense waterfall and begin a new one.
Ensure only light components are used as suspense to provide good UX.
*/
