import { Box, Container } from "@mui/material";
import { getNavbar } from "./cms/queries";
import Navigation from "./components/Navigation";

export default async function Navbar() {
  const cms = await getNavbar();

  return (
    <Container
      sx={{
        position: "sticky",
        top: 0,
        bgcolor: "custom.main",
        zIndex: 3,
        pb: "1rem",
      }}
    >
      <Box
        sx={{
          height: "4rem",
          py: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          "& > div": {
            display: "flex",
            alignItems: "center",
            height: "100%",
          },
        }}
      >
        <Box sx={{ width: "16rem", justifyContent: "flex-start" }}>qweqew</Box>
        <Navigation entries={cms.data.navbar.navigationEntries}></Navigation>
        <Box sx={{ width: "16rem", justifyContent: "flex-end" }}>qwe</Box>
      </Box>
    </Container>
  );
}
