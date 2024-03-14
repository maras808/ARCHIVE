import Framer from "@/src/components/framer";
import {
  FramerLayoutIds,
  framerStaggers,
  framerTransitions,
} from "@/src/lib/framer";
import { Box, Container, Stack } from "@mui/material";
import CTAButton from "./components/ctabutton";
import Description from "./components/description";
import Title from "./components/title";

export default function Home() {
  return (
    <Container
      sx={{
        height: "calc(100dvh - 6rem - 7rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={4}>
        <Framer
          variants={framerStaggers.slideFromBottom.container}
          initial="hidden"
          animate="show"
        >
          <Stack spacing={3}>
            <Framer
              variants={framerStaggers.slideFromBottom.item}
              transition={framerStaggers.slideFromBottom.transition}
            >
              <Title></Title>
            </Framer>
            <Framer
              variants={framerStaggers.slideFromBottom.item}
              transition={framerStaggers.slideFromBottom.transition}
            >
              <Description></Description>
            </Framer>
          </Stack>
        </Framer>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Framer layoutId={FramerLayoutIds.homeToSelect}>
            <Framer
              {...framerTransitions.slideFromBottom}
              transition={{
                ...framerTransitions.slideFromBottom.transition,
                delay: 1,
              }}
            >
              <CTAButton></CTAButton>
            </Framer>
          </Framer>
        </Box>
      </Stack>
    </Container>
  );
}
