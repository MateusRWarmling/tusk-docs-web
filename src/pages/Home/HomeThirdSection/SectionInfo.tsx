import { Text, Image, Flex } from "@chakra-ui/react";
import separator from "../../../Assets/images/separator.png";

export function SectionInfo() {
  return (
    <Flex direction="column" paddingX={{ base: "1rem", xl: "0" }} maxW="35rem">
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
      <Image src={separator} mb="56px" maxW="100%" />
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
