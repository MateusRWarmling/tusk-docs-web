import { Flex, Image } from "@chakra-ui/react";
import { SectionInfo } from "./SectionInfo";
import { ImagesContainer } from "./ImagesContainer";

export function HomeThirdSection() {
  return (
    <Flex w="1200px" marginX="auto" justifyContent="space-between" mb="6rem">
      <SectionInfo />
      <ImagesContainer />
    </Flex>
  );
}
