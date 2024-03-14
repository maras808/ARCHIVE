"use client";

import { Container, Stack } from "@mui/material";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Buttons from "./components/buttons";
import Files from "./components/files";

export type FileType = {
  file: File;
  progress: number;
};

export const SelectContext = createContext<{
  files: FileType[];
  setFiles: Dispatch<SetStateAction<FileType[]>>;
}>({
  files: [],
  setFiles: () => {
    throw new Error("setFiles called outside of SelectContext.Provider");
  },
});

export default function Select() {
  const [files, setFiles] = useState<FileType[]>([]);

  return (
    <SelectContext.Provider value={{ files, setFiles }}>
      <Container
        sx={{
          height: "calc(100dvh - 6rem - 7rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={4}
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Files></Files>
          <Stack direction={"row"} justifyContent={"center"} spacing={4}>
            <Buttons></Buttons>
          </Stack>
        </Stack>
      </Container>
    </SelectContext.Provider>
  );
}
