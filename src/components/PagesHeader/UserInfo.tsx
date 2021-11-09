import { Flex, Text, Avatar } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function UserInfo() {
  const { user } = useContext(AuthContext);

  return (
    <Flex alignItems="center">
      <Text fontWeight="semibold" marginRight="12px">
        {user?.nickname}
      </Text>
      <Avatar size="sm" name={user?.nickname} />
    </Flex>
  );
}
