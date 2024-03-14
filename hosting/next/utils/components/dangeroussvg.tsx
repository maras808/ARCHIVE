import { Box } from "@mui/material";
import { fetchSVGServerSide } from "../globals";

type DangerousSVGType = {
  src: string;
};

export default async function DangerousSVG({ src }: DangerousSVGType) {
  const fetchData = async () => {
    "use cache";
    return await fetchSVGServerSide(src);
  };

  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: await fetchData(),
      }}
      display={"flex"}
    ></Box>
  );
}
