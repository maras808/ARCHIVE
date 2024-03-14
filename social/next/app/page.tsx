import Create from "@/src/_features/create/Create";
import FeedMain from "@/src/_features/feedmain/FeedMain";
import { Box } from "@mui/material";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Suspense>
        <Create></Create>
      </Suspense>
      <FeedMain></FeedMain>
    </Box>
  );
}
