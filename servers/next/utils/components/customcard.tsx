import { Card, CardBody, CardProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomCardProps extends CardProps {
  title?: string;
  children: ReactNode;
}

export default function CustomCard({ title, children }: CustomCardProps) {
  return (
    <Card bgColor={"dark.300"} color={"text"} h={"100%"}>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          {title && <Text as={"b"}>{title}</Text>}
          {children}
        </Flex>
      </CardBody>
    </Card>
  );
}
