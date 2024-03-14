import { Box, Container, Paper } from "@mui/material";
import { ReactNode, Suspense } from "react";
import Aside from "../_features/aside/aside";
import Contacts from "../_features/contacts/Contacts";

function LayoutWrapperHelper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        height: "calc(100dvh - 4rem - 2rem)",
        position: "sticky",
        top: "5rem",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          minWidth: "16rem",
          bgcolor: "custom.light",
          height: "100%",
          p: 2,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <Container sx={{ display: "flex", gap: 4 }}>
      <LayoutWrapperHelper>
        <Suspense>
          <Aside></Aside>
        </Suspense>
      </LayoutWrapperHelper>
      <Container
        maxWidth={"sm"}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {children}
      </Container>
      <LayoutWrapperHelper>
        <Suspense>
          <Contacts></Contacts>
        </Suspense>
      </LayoutWrapperHelper>
    </Container>
  );
}
