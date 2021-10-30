import { Flex, Image } from "@chakra-ui/react";
import { SectionInfo } from "./SectionInfo";

export function HomeFirstSection() {
  return (
    <Flex
      maxW="1200px"
      marginX="auto"
      justifyContent={{ sm: "center", lg: "space-between" }}
      alignItems={{ base: "center", xl: "inherit" }}
      mb="6rem"
      direction={{ sm: "column", lg: "inherit" }}
    >
      <SectionInfo />
      <Image
        src="src\Assets\images\notebookImage.png"
        display={{ base: "none", lg: "inherit" }}
        maxH="462px"
        maxW="568px"
      />
    </Flex>
  );
}
