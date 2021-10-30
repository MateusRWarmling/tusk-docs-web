import { IoCloseSharp } from "react-icons/io5";
import { Flex } from "@chakra-ui/react";

export function XIconsDivider() {
  return (
    <Flex gridGap="10px" display={{ base: "none", md: "inherit" }}>
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
    </Flex>
  );
}
