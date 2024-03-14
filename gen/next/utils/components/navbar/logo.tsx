import { Box, Text, TextProps } from "@chakra-ui/react";

type LogoType = {
  asSVG?: boolean;
} & TextProps;

export default function Logo({ asSVG, ...textprops }: LogoType) {
  if (!asSVG) {
    return (
      <Text fontSize={"2rem"} {...textprops}>
        <b>snapgen.pro</b>
      </Text>
    );
  } else {
    return <Box>err</Box>;
  }
}
