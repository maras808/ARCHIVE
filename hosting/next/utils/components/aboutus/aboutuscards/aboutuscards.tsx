import { gql } from "@apollo/client";
import { Grid2, Typography } from "@mui/material";
import { apolloClient } from "../../../globals";
import Framer from "../../framer/framer";
import AboutUsCard from "./aboutuscard";
import AboutUsCardsSuspense from "./aboutuscardssuspense";

import { unstable_cacheLife as cacheLife } from "next/cache";

type GqlResponseAboutUsCards = {
  aboutUs: {
    aboutUsCards: {
      cardsTitle: string;
      cardsDescription: string;
      cards: {
        title: string;
        description: string;
        button: {
          title: string;
          link: {
            value: string;
          };
        };
      }[];
    };
  };
};

export default async function AboutUsCards() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const items = {
    text: {
      hidden: { x: -8, opacity: 0 },
      show: { x: 0, opacity: 1 },
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    cards: {
      hidden: { y: 32, opacity: 0 },
      show: { y: 0, opacity: 1 },
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 200,
      },
    },
  };

  const fetchData = async () => {
    "use cache";
    cacheLife("seconds");
    const { data } = await apolloClient.query<GqlResponseAboutUsCards>({
      query: gql`
        query AboutUsCards {
          aboutUs {
            aboutUsCards {
              cardsTitle
              cardsDescription
              cards {
                title
                description
                button {
                  title
                  link {
                    value
                  }
                }
              }
            }
          }
        }
      `,
    });
    return data;
  };

  const data = await fetchData();

  return (
    <Framer
      initial="hidden"
      animate="show"
      variants={container}
      dynamicSuspense={<AboutUsCardsSuspense />}
    >
      <Framer variants={items.text} transition={items.text.transition}>
        <Typography fontSize={32}>
          {data.aboutUs.aboutUsCards.cardsTitle}
        </Typography>
      </Framer>
      <Framer variants={items.text} transition={items.text.transition} mt={2}>
        <Typography fontSize={24}>
          {data.aboutUs.aboutUsCards.cardsDescription}
        </Typography>
      </Framer>
      <Grid2 container columns={3} spacing={4} mt={6}>
        {data.aboutUs.aboutUsCards.cards.map((card, index) => {
          return (
            <Grid2 size={1} key={index}>
              <Framer
                variants={items.cards}
                transition={items.cards.transition}
                height={"100%"}
              >
                <AboutUsCard card={card}></AboutUsCard>
              </Framer>
            </Grid2>
          );
        })}
      </Grid2>
    </Framer>
  );
}
