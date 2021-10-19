import { Flex, Text } from "@chakra-ui/react";
import { XIconsDivider } from "./XIconsDivider";

export function SubscribeText() {
  return (
    <Flex alignItems="center">
      <Text
        fontSize="36px"
        fontFamily="ubuntu"
        fontWeight="bold"
        mr="27px"
        color="white"
      >
        Inscreva-se para saber as novidades do App!
      </Text>
      <XIconsDivider />
    </Flex>
  );
}
