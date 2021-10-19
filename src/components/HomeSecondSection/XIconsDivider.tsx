import { IoCloseSharp } from "react-icons/io5";
import { Flex } from "@chakra-ui/react";

export function XIconsDivider() {
  return (
    <Flex marginLeft="80px" top="-40px" gridGap="10px" position="absolute">
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
      <IoCloseSharp color="white" fontSize="24px" />
    </Flex>
  );
}
