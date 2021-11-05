import { Box, Text, Flex } from "@chakra-ui/react";
import { RegisterButton } from "../../../components/RegisterNowButton";

export function SectionInfo() {
  return (
    <Flex
      fontFamily="ubuntu"
      direction="column"
      padding={{ base: "1rem", xl: "0" }}
    >
      <Text
        fontWeight="bold"
        fontSize="56px"
        lineHeight="64px"
        marginBottom="3.125rem"
      >
        Deixa que o<br /> elefantinho da{" "}
        <Box as="span" color="blue.850">
          Tusk
        </Box>
        <br /> lembra por você!!
      </Text>
      <Text
        fontSize="20px"
        color="blue.850"
        lineHeight="23px"
        marginBottom="4.5rem"
      >
        Já teve dificuldade de gerenciar o prazo de todos os <br /> boletos dos
        seus clientes? Agora você não precisa mais se <br /> preocupar que a
        Tusk cuida disso pra você!
      </Text>
      <RegisterButton />
    </Flex>
  );
}
