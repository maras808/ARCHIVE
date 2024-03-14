import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      width={"100%"}
      height={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress size={"4rem"}></CircularProgress>
    </Box>
  );
}
