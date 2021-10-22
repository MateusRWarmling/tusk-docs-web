import { Box, Text, Flex } from "@chakra-ui/react";
import { RegisterButton } from "../RegisterButton";

export function SectionInfo() {
  return (
    <Flex fontFamily="ubuntu" direction="column" justifyContent="space-between">
      <Text fontWeight="bold" fontSize="56px" lineHeight="64px">
        Deixa que o<br /> elefantinho da{" "}
        <Box as="span" color="blue.850">
          Tusk
        </Box>
        <br /> lembra por você!!
      </Text>
      <Text fontSize="20px" color="blue.850" lineHeight="23px">
        Já teve dificuldade de gerenciar o prazo de todos os <br /> boletos dos
        seus clientes? Agora você não precisa mais se <br /> preocupar que a
        Tusk cuida disso pra você!
      </Text>
      <RegisterButton />
    </Flex>
  );
}
