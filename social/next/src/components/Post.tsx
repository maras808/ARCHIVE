import { Box, Paper, Stack, Typography } from "@mui/material";

type PostType = {
  children: string;
};

export default function Post({ children }: PostType) {
  return (
    <Paper
      elevation={1}
      sx={{
        bgcolor: "custom.light",
        p: 2,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
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
        <Stack flexGrow={1}>
          <Typography>,jabsdjkabsdasbnldasd</Typography>
          <Typography>Lorem, ipsum.</Typography>
        </Stack>
        <Typography color="text.secondary">qweqweqweqew</Typography>
      </Box>
      <Typography>{children}</Typography>
    </Paper>
  );
}
