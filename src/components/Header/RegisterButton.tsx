import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function RegisterButton() {
  return (
    <Link to="/register">
      <Button
        as="a"
        backgroundColor="blue.850"
        color="white"
        fontWeight="bold"
        paddingY="23px"
        paddingX="2.3rem"
        borderRadius="6px"
        transition="0.2s"
        _hover={{
          filter: "brightness(0.7)",
        }}
      >
        Cadastrar
      </Button>
    </Link>
  );
}
