import { getCookiesPrompt } from "@/src/cms/queries";
import { framerTransitions } from "@/src/lib/framer";
import cookies, { CookieNames } from "@/src/utils/cookies/cookies";
import { Box, Paper, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import DangerousSVG from "../dangeroussvg";
import Framer from "../framer";
import CookiesButton from "./cookiesbutton";

export default async function Cookies() {
  const { exists } = cookies();
  const hidePrompt = await exists(CookieNames.hideCookiesPrompt);
  const res = await getCookiesPrompt();

  return (
    <AnimatePresence>
      {!hidePrompt && (
        <Framer
          {...framerTransitions.slideFromBottom}
          exit={{ y: 32, opacity: 0 }}
        >
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              left: 0,
              right: 0,
              py: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              viewTransitionName: "prevent2",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "custom.light",
                height: "4rem",
                gap: 1,
                px: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>{res.data.cookiesPrompt.text}</Typography>
              <CookiesButton sx={{ aspectRatio: 1 / 1, minWidth: 0 }}>
                <DangerousSVG
                  src={res.data.cookiesPrompt.icon.url}
                  sx={{
                    transform: "scale(1)",
                  }}
                ></DangerousSVG>
              </CookiesButton>
            </Paper>
          </Box>
        </Framer>
      )}
    </AnimatePresence>
  );
}
