import { Box } from "@mui/material";
import { fetchSVGServerSide } from "../globals";
import Framer from "./framer";

type DangerousSVGType =
  | {
      isAnimated: true;
      primaryUrl: string;
      secondaryUrl: string;
    }
  | {
      isAnimated: false;
      primaryUrl: string;
    };

export default async function DangerousSVG(props: DangerousSVGType) {
  if (!props.isAnimated) {
    return (
      <Box position={"relative"}>
        <Box
          dangerouslySetInnerHTML={{
            __html: await fetchSVGServerSide(props.primaryUrl),
          }}
          display={"flex"}
        ></Box>
      </Box>
    );
  } else {
    return (
      <Box position={"relative"}>
        <Framer initial={{ opacity: 1 }} whileHover={{ opacity: 0 }}>
          <Box
            dangerouslySetInnerHTML={{
              __html: await fetchSVGServerSide(props.primaryUrl),
            }}
            display={"flex"}
          ></Box>
        </Framer>
        <Framer
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          position={"absolute"}
          sx={{
            inset: 0,
          }}
        >
          <Box
            dangerouslySetInnerHTML={{
              __html: await fetchSVGServerSide(props.secondaryUrl),
            }}
            display={"flex"}
          ></Box>
        </Framer>
      </Box>
    );
  }
}
