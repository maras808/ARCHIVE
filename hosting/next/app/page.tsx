import Framer from "@/utils/components/framer/framer";
import LottieCustom from "@/utils/components/lottiecustom";
import MuiLink from "@/utils/components/muilink";
import Typewriter from "@/utils/components/typewriter";
import { apolloClient } from "@/utils/globals";
import { gql } from "@apollo/client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default async function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1 },
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 100,
    },
  };

  type GqlResponseHero = {
    hero: {
      title: {
        text: string;
        duration: number;
      };
      description: string;
      lottie: {
        json: JSON;
        loop: boolean;
      };
      buttons: {
        title: string;
        link: {
          value: string;
        };
      }[];
    };
  };

  const fetchData = async () => {
    return await apolloClient.query<GqlResponseHero>({
      query: gql`
        query Hero {
          hero {
            title {
              text
              duration
            }
            description
            lottie {
              json
              loop
            }
            buttons {
              title
              link {
                value
              }
            }
          }
        }
      `,
    });
  };

  const { data } = await fetchData();
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Container
        sx={{
          height: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            height: "100%",
            width: "max(50%, 24rem)",
            marginLeft: 0,
            px: "0 !important",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack spacing={2} width={"100%"}>
            <Box fontSize={48} width={"100%"}>
              <Typewriter
                text={data.hero.title.text}
                duration={data.hero.title.duration}
              ></Typewriter>
            </Box>
            <Framer initial="hidden" animate="show" variants={container}>
              <Stack spacing={2}>
                <Framer
                  variants={listItem}
                  transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 200,
                  }}
                >
                  <Typography fontSize={24}>{data.hero.description}</Typography>
                </Framer>
                <Framer variants={listItem} transition={listItem.transition}>
                  <Stack direction={"row"} spacing={1}>
                    {data.hero.buttons.map((button, index) => {
                      return (
                        <MuiLink href={button.link.value} key={index}>
                          <Button
                            variant={index === 0 ? "contained" : "outlined"}
                            sx={{
                              fontSize: 20,
                            }}
                          >
                            {button.title}
                          </Button>
                        </MuiLink>
                      );
                    })}
                  </Stack>
                </Framer>
              </Stack>
            </Framer>
          </Stack>
        </Container>
        <Framer
          position={"absolute"}
          left={"50%"}
          right={0}
          width={"60rem"}
          initial={{ x: "60rem", opacity: 0 }}
          animate={{ x: "0rem", opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 50,
          }}
        >
          <LottieCustom
            animationData={data.hero.lottie.json}
            loop={data.hero.lottie.loop}
          ></LottieCustom>
        </Framer>
      </Container>
    </Box>
  );
}
