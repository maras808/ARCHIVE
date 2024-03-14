import { apolloClient } from "@/utils/globals";
import { gql } from "@apollo/client";
import { Box, Divider, InputBase, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import DangerousSVG from "../dangeroussvg";
import Framer from "../framer";

type GqlResponseSearchbar = {
  searchbar: {
    icon: {
      baseIcon: {
        url: string;
        alternativeText: string;
      };
    };
  };
};

export default async function Searchbar() {
  const { data } = await apolloClient.query<GqlResponseSearchbar>({
    query: gql`
      query Searchbar {
        searchbar {
          icon {
            baseIcon {
              url
              alternativeText
            }
          }
        }
      }
    `,
  });
  return (
    <Paper
      elevation={4}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={data.searchbar.icon.baseIcon.alternativeText}
      />

      <Box height={"100%"} py={"4px"}>
        <Divider orientation="vertical"></Divider>
      </Box>
      <Framer
        initial={{ backgroundColor: "#ffffff" }}
        whileHover={{ backgroundColor: grey[300] }}
        whileTap={{ backgroundColor: grey[400] }}
        sx={{
          borderTopRightRadius: "inherit",
          borderBottomRightRadius: "inherit",
          color: grey[900],
        }}
      >
        <DangerousSVG
          isAnimated={false}
          primaryUrl={`${process.env.STRAPI_URL}${data.searchbar.icon.baseIcon.url}`}
        ></DangerousSVG>
      </Framer>
    </Paper>
  );
}
