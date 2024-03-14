import CustomLink from "@/src/components/CustomLink";
import DangerousSVG from "@/src/components/DangerousSVG";
import { Box, Button, Typography } from "@mui/material";
import { GqlResponseCreateSharedType } from "../cms/queries";

type EntryType = GqlResponseCreateSharedType;

export default function Entry({ icon, link }: EntryType) {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        "& > a": {
          width: "100%",
        },
      }}
    >
      <CustomLink href={link.src}>
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ mr: 1 }}>{link.title}</Typography>
          <DangerousSVG src={icon.url}></DangerousSVG>
        </Button>
      </CustomLink>
    </Box>
  );
}
