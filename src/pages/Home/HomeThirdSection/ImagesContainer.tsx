import { Box, Flex, Image } from "@chakra-ui/react";
import girlWithPhone from "../../../Assets/images/girlWithPhone.png";
import playStore from "../../../Assets/images/playStore.png";
import appStore from "../../../Assets/images/appStore.png";

export function ImagesContainer() {
  return (
    <Box maxW="590px">
      <Image src={girlWithPhone} mx="auto" mb="17px" />
      <Flex
        gridColumnGap="82px"
        gridRowGap="2rem"
        direction={{ base: "column", xl: "inherit" }}
        alignItems={{ base: "center", xl: "inherit" }}
      >
        <Image src={playStore} maxW="253px" />
        <Image src={appStore} maxW="253px" />
      </Flex>
    </Box>
  );
}
