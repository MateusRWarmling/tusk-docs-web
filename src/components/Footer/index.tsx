import { Flex, Box, Button, Image, Text } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { RegisterButton } from "../RegisterButton";

export function Footer() {
  return (
    <Box>
      <Flex
        w="1200px"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        mb="2.5rem"
      >
        <Flex alignItems="center">
          <Image src="src\Assets\images\elephant.png" maxH="136px" mr="45px" />
          <Nav />
        </Flex>
        <RegisterButton />
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="bold"
        textAlign="center"
        color="white"
        backgroundColor="black"
        lineHeight="38px"
      >
        Tusk docs ® 2021
      </Text>
    </Box>
  );
}
