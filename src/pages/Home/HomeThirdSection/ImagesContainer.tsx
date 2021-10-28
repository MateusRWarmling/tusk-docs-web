import { Box, Flex, Image } from "@chakra-ui/react";

export function ImagesContainer() {
  return (
    <Box>
      <Image src="src\Assets\images\girlWithPhone.png" mx="auto" mb="17px" />
      <Flex justifyContent="space-between">
        <Image src="src\Assets\images\playStore.png" mr="60px" />
        <Image src="src\Assets\images\appStore.png" />
      </Flex>
    </Box>
  );
}
