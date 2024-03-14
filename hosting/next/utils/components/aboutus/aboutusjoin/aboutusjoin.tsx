import { apolloClient } from "@/utils/globals";
import { gql } from "@apollo/client";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { unstable_cacheLife as cacheLife } from "next/cache";
import Framer from "../../framer/framer";
import MuiLink from "../../muilink";
import AboutUsJoinSuspense from "./aboutusjoinsuspense";

export default async function AboutUsJoin() {
  type GqlResponseAboutUsJoin = {
    aboutUs: {
      join: {
        title: string;
        description: string;
        Button: {
          link: {
            value: string;
          };
          title: string;
        }[];
      };
    };
  };

  const fetchData = async () => {
    "use cache";
    cacheLife("seconds");
    return await apolloClient.query<GqlResponseAboutUsJoin>({
      query: gql`
        query AboutUsCards {
          aboutUs {
            join {
              title
              description
              Button {
                link {
                  value
                }
                title
              }
            }
          }
        }
      `,
    });
  };

  const { data } = await fetchData();

  return (
    <Framer
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 40, stiffness: 200 }}
      dynamicSuspense={<AboutUsJoinSuspense></AboutUsJoinSuspense>}
    >
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Paper
          sx={{
            backgroundColor: "custom.light",
            p: 4,
            color: grey[50],
            width: "100%",
          }}
          elevation={8}
        >
          <Stack spacing={4} direction={"row"}>
            <Stack spacing={1}>
              <Typography fontSize={"1.75rem"}>
                {data.aboutUs.join.title}
              </Typography>
              <Typography fontSize={"1.25rem"}>
                {data.aboutUs.join.description}
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              flex={1}
            >
              {data.aboutUs.join.Button.map((button, index) => {
                return (
                  <MuiLink href={button.link.value} key={index}>
                    <Button
                      variant={index !== 0 ? "outlined" : "contained"}
                      sx={{
                        fontSize: "1.25rem",
                      }}
                    >
                      {button.title}
                    </Button>
                  </MuiLink>
                );
              })}
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Framer>
  );
}
