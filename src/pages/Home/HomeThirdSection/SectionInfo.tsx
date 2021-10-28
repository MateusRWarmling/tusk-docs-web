import { Box, Text, Image, Flex } from "@chakra-ui/react";

export function SectionInfo() {
  return (
    <Flex direction="column">
      <Text
        fontWeight="bold"
        fontSize="48px"
        lineHeight="55px"
        mb="20px"
        fontFamily="ubuntu"
      >
        Baixe o app para
        <br /> escanear os boletos e<br /> facilitar o processo
      </Text>
      <Image src="src\Assets\images\separator.png" mb="56px" />
      <Text fontSize="24px" lineHeight="36px" fontFamily="Poppins">
        Utilizamos a câmera do seu celular e a<br /> inteligência artificial
        para ler os boletos. Dessa
        <br /> forma você não precisa digitar nada e deixa o<br /> processo de
        cadastrar suas contas na
        <br /> plataforma muito mais rápida!
      </Text>
    </Flex>
  );
}
