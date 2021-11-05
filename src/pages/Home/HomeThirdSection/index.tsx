import { Flex } from "@chakra-ui/react";
import { SectionInfo } from "./SectionInfo";
import { ImagesContainer } from "./ImagesContainer";

export function HomeThirdSection() {
  return (
    <Flex
      maxW="1200px"
      marginX="auto"
      justifyContent="space-between"
      mb="6rem"
      direction={{ sm: "column", lg: "inherit" }}
      gridRowGap="3rem"
    >
      <SectionInfo />
      <ImagesContainer />
    </Flex>
  );
}
