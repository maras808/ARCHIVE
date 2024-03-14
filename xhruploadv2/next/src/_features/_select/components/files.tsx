import Framer from "@/src/components/framer";
import { Box, LinearProgress, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { SelectContext } from "../select";

export default function Files() {
  const { files } = useContext(SelectContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        maxWidth: "100%",
        gap: 4,
      }}
    >
      <AnimatePresence>
        {files.map((fileObj, index) => {
          return (
            <Framer
              key={`${fileObj.file.name}-${index}`}
              layout
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              initial={{ opacity: 0, y: 0 }}
              sx={{
                bgcolor: "custom.dark",
                p: 2,
                borderRadius: 2,
                minWidth: "16rem",
                minHeight: "16rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  width: "100%",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {fileObj.file.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={fileObj.progress}
                sx={{
                  width: "100%",
                }}
              ></LinearProgress>
              <Typography>{Math.round(fileObj.progress)}%</Typography>
            </Framer>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}
