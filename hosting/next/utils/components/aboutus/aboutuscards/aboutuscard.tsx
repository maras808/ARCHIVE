import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import MuiLink from "../../muilink";

type AboutUsCardType = {
  card: {
    title: string;
    description: string;
    button: {
      title: string;
      link: {
        value: string;
      };
    };
  };
};

export default function AboutUsCard({ card }: AboutUsCardType) {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "custom.dark",
        borderColor: "primary.main",
        color: "inherit",
        height: "100%",
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Stack spacing={2} height={"100%"}>
          <Typography fontSize={24}>{card.title}</Typography>
          <Typography fontSize={16}>{card.description}</Typography>
          <Box flex={1} display={"flex"} alignItems={"flex-end"}>
            <MuiLink href={card.button.link.value}>
              <Button variant="text">{card.button.title}</Button>
            </MuiLink>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
