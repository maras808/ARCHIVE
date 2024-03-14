import { Box, Skeleton } from "@mui/material";

type CustomSuspenseType = {
  amount: number;
};

export default function CustomSuspense({ amount }: CustomSuspenseType) {
  return (
    <Box
      sx={{
        gap: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={{
              bgcolor: "custom.light",
              borderRadius: 1,
              height: "10rem",
            }}
          ></Skeleton>
        );
      })}
    </Box>
  );
}
