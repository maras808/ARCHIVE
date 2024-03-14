"use client";

import { Box } from "@mui/material";
import { Prisma } from "@prisma/client";
import { ReactNode } from "react";
import useSWRInfinite from "swr/infinite";
import CustomSuspense from "./CustomSuspense";
import IngersectionPage from "./IntersectionPage";

type FeedMainWrapperType = {
  noMoreData: ReactNode;
  followMore: ReactNode;
};

export default function FeedMainWrapper({
  noMoreData,
  followMore,
}: FeedMainWrapperType) {
  const LIMIT: number = 3 as const;
  const POPUP_SWITCH: number = 16 as const;

  const getKey = (
    pageIndex: number,
    previousPageData: Prisma.PostGetPayload<{}>[]
  ) => {
    if (previousPageData && !previousPageData.length) return;
    return `/api/feedmain?page=${pageIndex}&limit=${LIMIT}`;
  };
  const { data, isValidating, setSize } =
    useSWRInfinite<Prisma.PostGetPayload<{}>[]>(getKey);

  const hasMoreData = data && data[data.length - 1].length === LIMIT;

  if (!data) return <CustomSuspense amount={LIMIT}></CustomSuspense>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        pb: 2,
      }}
    >
      {data
        .filter((gotPayload) => gotPayload.length)
        .map((posts, index) => {
          return (
            <IngersectionPage
              key={index}
              posts={posts}
              setSize={setSize}
            ></IngersectionPage>
          );
        })}
      {isValidating && <CustomSuspense amount={LIMIT}></CustomSuspense>}
      {!hasMoreData && data.flat().length < POPUP_SWITCH && followMore}
      {!hasMoreData && data.flat().length >= POPUP_SWITCH && noMoreData}
    </Box>
  );
}
