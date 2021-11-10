import { SectionInfo } from "./SectionInfo";
import { Flex, Image } from "@chakra-ui/react";
import { SideCircles } from "./SideCircles";
import triangle from "../../../Assets/images/triangle.png";
import dashboardDrawing from "../../../Assets/images/dashboardDrawing.png";

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
        src={triangle}
        position="absolute"
        right="0"
        top="94px"
        display={{ base: "none", xl: "inherit" }}
      />

      <Flex
        maxW="1200px"
        w="100%"
        marginX="auto"
        justifyContent="space-between"
        direction={{ sm: "column", lg: "inherit" }}
      >
        <Image
          maxH="405px"
          maxW="572px"
          paddingX={{ base: "1rem", xl: "0" }}
          display={{ base: "none", lg: "inherit" }}
          src={dashboardDrawing}
        />
        <SectionInfo />
      </Flex>
    </Flex>
  );
}
