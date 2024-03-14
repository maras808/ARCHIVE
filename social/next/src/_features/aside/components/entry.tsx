import CustomLink from "@/src/components/CustomLink";
import DangerousSVG from "@/src/components/DangerousSVG";
import { Button, Typography } from "@mui/material";
import { GqlResponseAside } from "../cms/queries";

type EntryType = GqlResponseAside["aside"]["entries"][number];

export default function Entry({ icon, link }: EntryType) {
  return (
    <CustomLink href={link.src}>
      <Button
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <DangerousSVG src={icon.url}></DangerousSVG>
        <Typography sx={{ ml: 1.5 }}>{link.title}</Typography>
      </Button>
    </CustomLink>
  );
}
