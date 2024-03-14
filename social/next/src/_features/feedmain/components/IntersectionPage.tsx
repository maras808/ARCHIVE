"use client";

import Post from "@/src/components/Post";
import { Box } from "@mui/material";
import { Prisma } from "@prisma/client";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type IngersectionPageType = {
  posts: Prisma.PostGetPayload<{}>[];
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<Prisma.PostGetPayload<{}>[][] | undefined>;
};

export default function IngersectionPage({
  posts,
  setSize,
}: IngersectionPageType) {
  const intersectionRef = useRef<HTMLDivElement>(null);
  //@ts-expect-error
  const didIntersect = useInView(intersectionRef, {
    once: true,
    amount: "some",
  });

  useEffect(() => {
    didIntersect && setSize((v) => v + 1);
  }, [didIntersect]);

  return (
    <Box
      ref={intersectionRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {posts.map((post, index) => {
        return <Post key={index}>{post.content}</Post>;
      })}
    </Box>
  );
}
