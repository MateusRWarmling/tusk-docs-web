import { SectionInfo } from "./SectionInfo";
import { Flex, Image } from "@chakra-ui/react";
import { SideCircles } from "./SideCircles";

export function HomeSecondSection() {
  return (
    <Flex
      h="760px"
      bgColor="black"
      alignItems="center"
      position="relative"
      mb="81px"
    >
      <SideCircles />
      <Image
        maxH="405px"
        src="src\Assets\images\triangle.png"
        position="absolute"
        right="0"
        top="94px"
      />
      <Flex w="1200px" marginX="auto" justifyContent="space-between">
        <Image maxH="405px" src="src\Assets\images\dashboardDrawing.png" />
        <SectionInfo />
      </Flex>
    </Flex>
  );
}
