import { Flex, Image } from "@chakra-ui/react";
import { SectionInfo } from "./SectionInfo";

export function HomeFirstSection() {
  return (
    <Flex w="1200px" marginX="auto" justifyContent="space-between" mb="6rem">
      <SectionInfo />
      <Image src="src\Assets\images\notebookImage.png" />
    </Flex>
  );
}
