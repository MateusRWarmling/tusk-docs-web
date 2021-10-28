import { Flex, Text } from "@chakra-ui/react";
import { SubscribeText } from "./SubscribeText";
import { SubscribeBox } from "./SubscribeBox";
import { SideCircles } from "./SideCircles";

export function SubscribeToNewsletter() {
  return (
    <Flex
      bgColor="blue.850"
      h="246px"
      mb="40px"
      justifyContent="center"
      align="center"
      position="relative"
    >
      <SideCircles />
      <Flex direction="column">
        <SubscribeText />
        <SubscribeBox />
      </Flex>
    </Flex>
  );
}
