import { getNavbar } from "@/src/cms/queries";
import { framerTransitions } from "@/src/lib/framer";
import { Box, Button, Paper } from "@mui/material";
import CustomLink from "../customlink";
import DangerousSVG from "../dangeroussvg";
import Framer from "../framer";

export default async function Navbar() {
  const res = await getNavbar();

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        py: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        viewTransitionName: "prevent",
      }}
    >
      <Framer {...framerTransitions.slideFromTop}>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "custom.light",
            height: "5rem",
            gap: 1,
            px: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {res.data.navbar.icon.map((icon, index) => {
            return (
              <CustomLink href={icon.href.value} key={index}>
                <Button
                  sx={{
                    aspectRatio: 1 / 1,
                  }}
                >
                  <DangerousSVG
                    src={icon.icon.url}
                    sx={{
                      transform: "scale(1.5)",
                    }}
                  ></DangerousSVG>
                </Button>
              </CustomLink>
            );
          })}
        </Paper>
      </Framer>
    </Box>
  );
}
