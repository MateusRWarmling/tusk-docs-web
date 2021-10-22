import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function RegisterButton() {
  return (
    <Link to="/register">
      <Box
        as="a"
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
    </Link>
  );
}
