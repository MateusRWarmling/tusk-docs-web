import { Box, Flex, Image } from "@chakra-ui/react";

export function ImagesContainer() {
  return (
    <Box maxW="590px">
      <Image src="src\Assets\images\girlWithPhone.png" mx="auto" mb="17px" />
      <Flex
        gridColumnGap="82px"
        gridRowGap="2rem"
        direction={{ base: "column", xl: "inherit" }}
        alignItems={{ base: "center", xl: "inherit" }}
      >
        <Image src="src\Assets\images\playStore.png" maxW="253px" />
        <Image src="src\Assets\images\appStore.png" maxW="253px" />
      </Flex>
    </Box>
  );
}
