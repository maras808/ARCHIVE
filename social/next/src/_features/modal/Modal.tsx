import DangerousSVG from "@/src/components/DangerousSVG";
import { Backdrop, Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";
import { getModalButton } from "./cms/queries";
import ModalClose from "./components/ModalClose";

type ModalType = {
  title: string;
  children: ReactNode;
};

export default async function Modal({ title, children }: ModalType) {
  const cms = await getModalButton();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 98,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            bgcolor: "custom.light",
            width: "24rem",
            p: 2,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <ModalClose
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: 1 / 1,
              minWidth: 0,
              height: "3rem",
            }}
          >
            <DangerousSVG src={cms.data.modalButton.icon.url}></DangerousSVG>
          </ModalClose>
        </Paper>
      </Box>
      <Backdrop
        open
        sx={{
          zIndex: 97,
        }}
      ></Backdrop>
    </>
  );
}
