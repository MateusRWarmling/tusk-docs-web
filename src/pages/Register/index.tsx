import { Flex, Image, Text } from "@chakra-ui/react";
import { RegisterForm } from "./RegisterForm";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Flex
      backgroundColor="blue.850"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        backgroundColor="white"
        borderRadius="10px"
        direction="column"
        alignItems="center"
        padding="24px"
      >
        <Image src="src\Assets\images\elephant.png" maxH="76px" maxW="76px" />
        <Text
          fontSize="19px"
          fontWeight="bold"
          color="#A4A6B3"
          marginBottom="2rem"
        >
          Tusk Docs
        </Text>
        <RegisterForm />
        <Flex marginTop="2rem">
          <Text fontSize="0.9rem" color="#9FA2B4" marginRight="0.5rem">
            Já tem uma conta?
          </Text>
          <Link to="/login">
            <Text fontSize="0.9rem" color="blue.850">
              Entrar
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
