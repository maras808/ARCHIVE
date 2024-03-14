import AboutUsCards from "@/utils/components/aboutus/aboutuscards/aboutuscards";
import AboutUsJoin from "@/utils/components/aboutus/aboutusjoin/aboutusjoin";
import AboutUsJoinSuspense from "@/utils/components/aboutus/aboutusjoin/aboutusjoinsuspense";
import ScrollToNext from "@/utils/components/scrolltonext/scrolltonext";
import { Box, Container } from "@mui/material";
import { Suspense } from "react";

export default function AboutUs() {
  return (
    <Box position={"relative"}>
      <Container>
        <Box
          minHeight={"100dvh"}
          py={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <AboutUsCards></AboutUsCards>
          <ScrollToNext></ScrollToNext>
        </Box>
        <Box
          minHeight={"100dvh"}
          py={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Suspense fallback={<AboutUsJoinSuspense></AboutUsJoinSuspense>}>
            <AboutUsJoin></AboutUsJoin>
          </Suspense>
        </Box>
      </Container>
    </Box>
  );
}
