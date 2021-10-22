import { IoEllipse } from "react-icons/io5";
import { Flex, SkeletonCircle } from "@chakra-ui/react";

export function SideCircles() {
  return (
    <Flex
      color="white"
      direction="column"
      gridGap="10px"
      fontSize="26px"
      top="46px"
      left="-10px"
      position="absolute"
    >
      <IoEllipse />
      <IoEllipse />
      <IoEllipse />
    </Flex>
  );
}
