import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export function RegisterButton() {
  return (
    <Link to="/register">
      <Button
        as="a"
        backgroundColor="red.450"
        transition="0.2s"
        paddingY="35px"
        paddingX="35px"
        fontSize="18px"
        fontWeight="bold"
        color="white"
        width="fit-content"
        _hover={{ backgroundColor: "red.500" }}
      >
        Cadastre-se Agora!🎉
      </Button>
    </Link>
  );
}
