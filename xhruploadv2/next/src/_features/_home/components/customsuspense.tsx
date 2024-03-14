import { Container, Skeleton, Stack } from "@mui/material";

export default function CustomSuspense() {
  return (
    <Container
      sx={{
        height: "calc(100dvh - 6rem - 7rem)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={4} alignItems={"center"} width={"100%"}>
        <Stack spacing={3} alignItems={"center"} width={"100%"}>
          <Skeleton variant="text" width={"50%"}></Skeleton>
          <Skeleton variant="text" width={"75%"}></Skeleton>
        </Stack>
        <Skeleton variant="rectangular" width={"25%"}></Skeleton>
      </Stack>
    </Container>
  );
}
