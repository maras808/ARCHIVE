"use client";

import CustomLink from "@/src/components/CustomLink";
import Framer from "@/src/components/Framer";
import { FramerLayoutIds, framerTransitions } from "@/src/lib/framer/framer";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GqlResponseNavbar } from "../cms/queries";

type NavigationType = {
  entries: GqlResponseNavbar["navbar"]["navigationEntries"];
};

export default function Navigation({ entries }: NavigationType) {
  const [active, setActive] = useState<string>(usePathname());
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        px: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: "custom.dark",
          borderRadius: "1.5rem",
          display: "flex",
          width: "100%",
          maxWidth: "calc(768px - 48px)",
          zIndex: 1,
          height: "100%",
        }}
      >
        {entries.map((entry, index) => {
          return (
            <Framer
              onClick={() => setActive(entry.src)}
              key={index}
              initial={false}
              animate={
                active === entry.src
                  ? { color: blue[500] }
                  : { color: theme.palette.text.primary }
              }
              transition={framerTransitions.defualtSpring}
              sx={{
                position: "relative",
                flexGrow: 1,
                borderRadius: "inherit",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& > div, a": {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              {active === entry.src && (
                <Framer
                  layoutId={FramerLayoutIds.NavigationEntries}
                  sx={{
                    bgcolor: "custom.light",
                    zIndex: -1,
                  }}
                  style={{
                    originY: "0px",
                    // IMPORTANT
                    // sx doesn't support originY, always set it in style
                  }}
                  transition={framerTransitions.defualtSpring}
                ></Framer>
              )}
              <CustomLink href={entry.src}>
                <Typography>
                  <b>{entry.title}</b>
                </Typography>
              </CustomLink>
            </Framer>
          );
        })}
      </Paper>
    </Box>
  );
}
