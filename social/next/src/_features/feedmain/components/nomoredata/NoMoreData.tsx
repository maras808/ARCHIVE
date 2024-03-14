import { Paper, Typography } from "@mui/material";
import { getNoMoreData } from "../../cms/queries";
import CustomButton from "./CustomButton";

export default async function NoMoreData() {
  const cms = await getNoMoreData();

  return (
    <Paper
      elevation={1}
      sx={{
        bgcolor: "custom.light",
        p: 2,
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography>{cms.data.mainFeed.noMoreData.title}</Typography>
      <CustomButton>{cms.data.mainFeed.noMoreData.buttonTitle}</CustomButton>
    </Paper>
  );
}
