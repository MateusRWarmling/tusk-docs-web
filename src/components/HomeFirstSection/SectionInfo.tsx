import { Box, Text, Button, Flex } from "@chakra-ui/react";

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
      <Button
        backgroundColor="red.450"
        transition="0.2s"
        paddingY="35px"
        paddingX="35px"
        fontSize="18px"
        color="white"
        width="fit-content"
        _hover={{ backgroundColor: "red.500" }}
      >
        Cadastre-se Agora!🎉
      </Button>
    </Flex>
  );
}
