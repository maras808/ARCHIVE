"use client";

import ChakraBox from "@/utils/components/chakrabox";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", damping: "40", stiffness: "200" }}
    >
      {children}
    </ChakraBox>
  );
}
