import { Box, Stack, Typography } from "@mui/material";

export default function Friend() {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          aspectRatio: 1 / 1,
          borderRadius: "50%",
          width: "48px",
          bgcolor: "#fff",
        }}
      ></Box>
      <Typography>FULLNAME</Typography>
    </Stack>
  );
}
