import { Box, Skeleton, Stack } from "@mui/material";

export default function AboutUsJoinSuspense() {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Stack spacing={4} direction={"row"} display={"flex"}>
        <Stack width={"16rem"}>
          <Skeleton variant="text" animation="wave"></Skeleton>
          <Skeleton variant="text" animation="wave"></Skeleton>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          display={"flex"}
          alignItems={"center"}
          width={"16rem"}
        >
          <Skeleton
            variant="rectangular"
            animation="pulse"
            height={"100%"}
            width={"100%"}
          ></Skeleton>
          <Skeleton
            variant="rectangular"
            animation="pulse"
            height={"100%"}
            width={"100%"}
          ></Skeleton>
        </Stack>
      </Stack>
    </Box>
  );
}
