import { IoEllipse } from "react-icons/io5";
import { Flex, SkeletonCircle } from "@chakra-ui/react";

export function SideCircles() {
  return (
    <Flex
      color="white"
      direction="column"
      gridGap="10px"
      fontSize="26px"
      left="-10px"
      position="absolute"
      display={{ sm: "none", lg: "inherit" }}
    >
      <IoEllipse />
      <IoEllipse />
      <IoEllipse />
    </Flex>
  );
}
