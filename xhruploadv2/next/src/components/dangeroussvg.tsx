import { Box, BoxProps } from "@mui/material";
import { getDangerousSVG } from "../cms/queries";

type DangerousSVGType = {
  src: string;
} & BoxProps;

export default async function DangerousSVG({
  src,
  ...props
}: DangerousSVGType) {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: await getDangerousSVG(src),
      }}
      display={"flex"}
      {...props}
    ></Box>
  );
}
