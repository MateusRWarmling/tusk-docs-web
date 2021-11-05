import { Box, Text, Flex } from "@chakra-ui/react";
import { XIconsDivider } from "./XIconsDivider";

export function SectionInfo() {
  return (
    <Flex
      direction="column"
      color="white"
      position="relative"
      paddingX={{ base: "1rem", xl: "0" }}
      alignItems={{ base: "center", xl: "inherit" }}
    >
      <Box>
        <XIconsDivider />
        <Text
          fontFamily="ubuntu"
          fontWeight="bold"
          fontSize="48px"
          lineHeight="55px"
          mb="27px"
        >
          Mantenha seus
          <br /> arquivos organizados
          <br /> num lugar só!
        </Text>
        <Text fontSize="20px" fontFamily="Poppins" lineHeight="30px">
          Você não precisa mais ficar procurando os
          <br /> documentos. Agora você pode colocar todos
          <br /> eles no nosso dashboard e controlar os
          <br /> vencimentos!
        </Text>
      </Box>
    </Flex>
  );
}
