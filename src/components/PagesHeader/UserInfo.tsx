import { Flex, Text, Avatar } from "@chakra-ui/react";

interface UserInfoProps {
  name: string;
}

export function UserInfo({ name }: UserInfoProps) {
  return (
    <Flex alignItems="center">
      <Text fontWeight="semibold" marginRight="12px">
        {name}
      </Text>
      <Avatar size="sm" />
    </Flex>
  );
}
