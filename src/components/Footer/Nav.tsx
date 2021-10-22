import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export function Nav() {
  return (
    <Flex
      gridGap="20px"
      fontFamily="Poppins"
      fontWeight="bold"
      fontSize="16px"
      color="#022E57"
    >
      <a href="#">Home</a>
      <Link to="/about">Sobre</Link>
      <Link to="/login">Login</Link>
    </Flex>
  );
}
