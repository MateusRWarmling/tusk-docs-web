import { Flex, Image, Text } from "@chakra-ui/react";

export function HomeFirstSection() {
  return (
    <Flex w="1120px" marginX="auto" justifyContent="space-between">
      <Flex fontFamily="ubuntu">
        <Text fontWeight="bold" fontSize="56">
          Deixa que o<br /> elefantinho da Tusk
          <br /> lembra por você!!
        </Text>
      </Flex>
      <Image src="src\Assets\images\notebookImage.png" />
    </Flex>
  );
}
