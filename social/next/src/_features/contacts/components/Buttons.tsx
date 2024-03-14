import CustomLink from "@/src/components/CustomLink";
import DangerousSVG from "@/src/components/DangerousSVG";
import { Box, Button } from "@mui/material";
import { getContacts } from "../cms/queires";

export default async function Buttons() {
  const cms = await getContacts();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        "& > a": {
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {cms.data.contact.buttons.map((button, index) => {
        return (
          <CustomLink href={button.link.src} key={index}>
            <Button
              sx={{
                width: "100%",
              }}
            >
              <DangerousSVG src={button.icon.url}></DangerousSVG>
            </Button>
          </CustomLink>
        );
      })}
    </Box>
  );
}
