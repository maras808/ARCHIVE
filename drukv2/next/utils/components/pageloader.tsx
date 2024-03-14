// import page from "@/utils/lotties/test.json";
import { Box, Center, Spinner } from "@chakra-ui/react";
// import LottieCustom from "./lottiecustom";

export default function PageLoader() {
  return (
    <Box h={"100dvh"} w={"100%"}>
      <Center h={"100%"}>
        {/* <LottieCustom animationData={page} loop></LottieCustom> */}
        <Spinner size={"xl"}></Spinner>
      </Center>
    </Box>
  );
}
