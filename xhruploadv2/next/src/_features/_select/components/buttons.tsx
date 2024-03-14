import Framer from "@/src/components/framer";
import { Button, styled } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { SelectContext } from "../select";
import { handleFileChange, handleUpload } from "../utils/functions";

export default function Buttons() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const { setFiles, files } = useContext(SelectContext);
  return (
    <>
      <Framer layout>
        <Button component="label" variant="contained">
          Select files
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => handleFileChange(e, setFiles)}
            multiple
          />
        </Button>
      </Framer>
      <AnimatePresence>
        {files.length > 0 && (
          <Framer
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <Button
              onClick={() => handleUpload(files, setFiles)}
              component="label"
              variant="contained"
            >
              Upload files
            </Button>
          </Framer>
        )}
      </AnimatePresence>
    </>
  );
}
