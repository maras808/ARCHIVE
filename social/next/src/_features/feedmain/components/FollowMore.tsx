import CustomLink from "@/src/components/CustomLink";
import { Button, Paper, Typography } from "@mui/material";
import { getFollowMore } from "../cms/queries";

export default async function FollowMore() {
  const cms = await getFollowMore();

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
      <Typography>{cms.data.mainFeed.followMore.title}</Typography>
      <CustomLink href={cms.data.mainFeed.followMore.button.src}>
        <Button>{cms.data.mainFeed.followMore.button.title}</Button>
      </CustomLink>
    </Paper>
  );
}
