import { gql } from "@apollo/client";
import { Box } from "@mui/material";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { apolloClient } from "../../globals";
import LottieCustom from "../lottiecustom";
import Detector from "./detector";

export default async function ScrollToNext() {
  type GqlResponseScrollToNext = {
    scrollToNext: {
      icon: {
        json: JSON;
        loop: boolean;
      };
    };
  };

  const fetchData = async () => {
    "use cache";
    cacheLife("seconds");
    return await apolloClient.query<GqlResponseScrollToNext>({
      query: gql`
        query ScrollToNext {
          scrollToNext {
            icon {
              json
              loop
            }
          }
        }
      `,
    });
  };

  const { data } = await fetchData();

  return (
    <Box
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      margin={"auto"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      pb={4}
      sx={{
        transformOrigin: "bottom",
        transform: "scale(0.3)",
      }}
    >
      <Box sx={{ transform: "rotate(180deg)" }}>
        <Detector delay={6000}>
          <LottieCustom
            animationData={data.scrollToNext.icon.json}
            loop={data.scrollToNext.icon.loop}
          ></LottieCustom>
        </Detector>
      </Box>
    </Box>
  );
}
