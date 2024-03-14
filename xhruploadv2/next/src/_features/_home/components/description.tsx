import { Typography } from "@mui/material";
import { getDescription } from "../cms/queries";

export default async function Description() {
  const res = await getDescription();

  return (
    <Typography fontSize={"1.5rem"} textAlign={"center"}>
      {res.data.home.description}
    </Typography>
  );
}
