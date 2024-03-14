import { Grid2, Skeleton, Stack } from "@mui/material";

export default function AboutUsCardsSuspense() {
  return (
    <>
      <Stack>
        <Skeleton variant="text" animation="wave"></Skeleton>
        <Skeleton variant="text" animation="wave"></Skeleton>
        <Skeleton variant="text" animation="wave"></Skeleton>
        <Skeleton variant="text" animation="wave"></Skeleton>
      </Stack>
      <Grid2 container columns={3} spacing={4} mt={6} height={"16rem"}>
        <Grid2 size={1}>
          <Skeleton
            height={"100%"}
            variant="rectangular"
            animation="pulse"
          ></Skeleton>
        </Grid2>
        <Grid2 size={1}>
          <Skeleton
            height={"100%"}
            variant="rectangular"
            animation="pulse"
          ></Skeleton>
        </Grid2>
        <Grid2 size={1}>
          <Skeleton
            height={"100%"}
            variant="rectangular"
            animation="pulse"
          ></Skeleton>
        </Grid2>
      </Grid2>
    </>
  );
}
