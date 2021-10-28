import { Flex, Text } from "@chakra-ui/react";
import { XIconsDivider } from "./XIconsDivider";

export function SubscribeText() {
  return (
    <Flex alignItems="center" marginBottom="48px">
      <Text
        fontSize="36px"
        lineHeight="41px"
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
