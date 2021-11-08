import { Flex, Text } from "@chakra-ui/react";
import { UserInfo } from "./UserInfo";

interface PagesHeaderProps {
  title: string;
}

export function PagesHeader({ title }: PagesHeaderProps) {
  return (
    <Flex justifyContent="space-between">
      <Text fontSize="1.5rem" fontWeight="bold">
        {title}
      </Text>
      <UserInfo name="Jones Ferdinand" />
    </Flex>
  );
}
