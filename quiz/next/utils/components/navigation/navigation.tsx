import { Box, Container, Grid2, Stack } from "@mui/material";
import NavIcons from "./navicons";
import Searchbar from "./searchbar";

export default function Navigation() {
  return (
    <Box height={"3rem"}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          py: 1,
        }}
      >
        <Grid2 container height={"100%"} width={"100%"} columns={4}>
          <Grid2 size={1}>qwewqe</Grid2>
          <Grid2 display={"flex"} height={"100%"} size="grow">
            <Searchbar></Searchbar>
          </Grid2>
          <Grid2 height={"100%"} size={1}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <NavIcons></NavIcons>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
