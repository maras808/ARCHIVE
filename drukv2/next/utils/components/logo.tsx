import { Text, TextProps } from "@chakra-ui/react";
import ChakraLink from "./chakralink";

type LogoType = {
  isText: boolean;
} & TextProps;

export default function Logo({ isText }: LogoType) {
  if (isText) {
    return (
      <ChakraLink href="/" color={"text"} _hover={{ color: "text" }}>
        <Text userSelect={"none"} letterSpacing={"1px"}>
          <b>Druk3D</b>
        </Text>
      </ChakraLink>
    );
  }
}
