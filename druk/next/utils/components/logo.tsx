import { Box, Text, TextProps } from "@chakra-ui/react";

type LogoType = {
  isSVG?: true;
} & TextProps;

export default function Logo({ isSVG, ...props }: LogoType) {
  if (isSVG) {
    return <Box>err</Box>;
  } else {
    return (
      <Text {...props}>
        <b>LOGO</b>
      </Text>
    );
  }
}
