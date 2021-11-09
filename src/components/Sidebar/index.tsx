import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SidebarLinks } from "./SidebarLinks";

export function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <Flex
      backgroundColor="blue.850"
      h="100vh"
      maxW="16rem"
      w="100%"
      alignItems="center"
      direction="column"
      position="sticky"
      top="0"
    >
      <Avatar name={user?.nickname} size="2xl" mt="4.3rem" mb="2rem" />
      <SidebarLinks />
      <Text marginTop="auto" marginBottom="1rem" color="white">
        Tusk Docs © 2021
      </Text>
    </Flex>
  );
}
