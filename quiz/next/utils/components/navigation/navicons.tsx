import { apolloClient } from "@/utils/globals";
import { gql } from "@apollo/client";
import { grey } from "@mui/material/colors";
import DangerousSVG from "../dangeroussvg";
import Framer from "../framer";
import MuiLink from "../muilink";

export type GqlResponseNavIcons = {
  navigationIcons: {
    icon: {
      animatedIcon: {
        url: string;
        alternativeText: string;
      };
      baseIcon: {
        url: string;
        alternativeText: string;
      };
      isAnimated: boolean;
    };
  }[];
};

export default async function NavIcons() {
  const { data } = await apolloClient.query<GqlResponseNavIcons>({
    query: gql`
      query NavigationIcons {
        navigationIcons {
          icon {
            animatedIcon {
              url
              alternativeText
            }
            baseIcon {
              url
              alternativeText
            }
            isAnimated
          }
        }
      }
    `,
  });
  return data.navigationIcons.map((entry) => {
    return (
      <Framer whileHover={{ color: grey[400] }} color={"#ffffff"}>
        <MuiLink href="/">
          {entry.icon.isAnimated ? (
            <DangerousSVG
              isAnimated
              primaryUrl={`${process.env.STRAPI_URL}${entry.icon.baseIcon.url}`}
              secondaryUrl={`${process.env.STRAPI_URL}${entry.icon.animatedIcon.url}`}
            ></DangerousSVG>
          ) : (
            <DangerousSVG
              isAnimated={false}
              primaryUrl={`${process.env.STRAPI_URL}${entry.icon.baseIcon.url}`}
            ></DangerousSVG>
          )}
        </MuiLink>
      </Framer>
    );
  });
}
