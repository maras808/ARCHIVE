"use client";

import { useScroll } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type DetectorType = {
  children: ReactNode;
  delay: number;
};

export default function Detector({ children, delay }: DetectorType) {
  const { scrollY } = useScroll();
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShouldRender(true);
    }, delay);
    const unsubscribe = scrollY.on("change", () => {
      clearTimeout(initialTimeout);
      shouldRender && setShouldRender(false);
      unsubscribe();
    });
    return () => {
      clearTimeout(initialTimeout);
      unsubscribe();
    };
  }, []);

  if (shouldRender) {
    return <>{children}</>;
  }
}
