import { Box, Paper } from "@mui/material";
import { getCreate } from "./cms/queries";
import Entry from "./components/Entry";

export default async function Create() {
  const cms = await getCreate();

  return (
    <Box
      pb={3}
      sx={{
        position: "sticky",
        top: "5rem",
        bgcolor: "custom.main",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "custom.dark",
          gap: 4,
        }}
      >
        {Object.values(cms.data.create)
          .filter((v) => v.shared)
          .map((v, index) => {
            return (
              <Entry
                key={index}
                icon={v.shared.icon}
                link={v.shared.link}
              ></Entry>
            );
          })}
      </Paper>
    </Box>
  );
}
