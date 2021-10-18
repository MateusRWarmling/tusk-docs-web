import { Box } from "@chakra-ui/react";

export function RegisterButton() {
  return (
    <Box
      as="button"
      backgroundColor="blue.850"
      color="white"
      fontWeight="bold"
      paddingY="12px"
      paddingX="2.1rem"
      borderRadius="6px"
      transition="0.2s"
      _hover={{
        filter: "brightness(0.7)",
      }}
    >
      Cadastrar
    </Box>
  );
}
