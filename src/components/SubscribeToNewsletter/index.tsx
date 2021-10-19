import { Flex, Text } from "@chakra-ui/react";
import { SubscribeText } from "./SubscribeText";

export function SubscribeToNewsletter() {
  return (
    <Flex bgColor="blue.850" h="246px" justifyContent="center">
      <SubscribeText />
    </Flex>
  );
}
