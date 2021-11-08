import { Flex, Avatar, Text } from "@chakra-ui/react";
import { SidebarLinks } from "./SidebarLinks";

export function Sidebar() {
  return (
    <Flex
      backgroundColor="blue.850"
      h="100vh"
      maxW="16rem"
      w="100%"
      alignItems="center"
      direction="column"
    >
      <Avatar
        maxW="153px"
        maxH="153px"
        w="100%"
        h="100%"
        mt="4.3rem"
        mb="2rem"
      />
      <SidebarLinks />
      <Text marginTop="auto" marginBottom="1rem" color="white">
        Tusk Docs © 2021
      </Text>
    </Flex>
  );
}
