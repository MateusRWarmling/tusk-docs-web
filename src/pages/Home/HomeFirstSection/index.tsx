import { Flex, Image } from "@chakra-ui/react";
import { SectionInfo } from "./SectionInfo";
import notebookImage from "../../../Assets/images/notebookImage.png";

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
        src={notebookImage}
        display={{ base: "none", lg: "inherit" }}
        maxH="462px"
        maxW="568px"
      />
    </Flex>
  );
}
