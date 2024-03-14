import LottieCustom from "@/src/components/lottiecustom";
import loading from "@/src/utils/lotties/loading.json";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        zIndex: -1,
        position: "fixed",
        inset: 0,
      }}
    >
      <LottieCustom animationData={loading} loop></LottieCustom>
    </Box>
  );
}
