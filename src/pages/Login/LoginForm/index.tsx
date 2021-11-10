import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthContext } from "../../../contexts/AuthContext";

import {
  Stack,
  FormLabel,
  Input,
  Box,
  Flex,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaEyeSlash } from "react-icons/fa";

type SignInFormData = {
  email: string;
  password: string;
};

export function LoginForm() {
  const { register, handleSubmit } = useForm({});
  const { signIn } = useContext(AuthContext);
  const [hide, setHide] = useState(true);

  const handleSignIn: SubmitHandler<SignInFormData> = ({ email, password }) => {
    signIn({ email, password });
  };

  const HandleHide = () => setHide(!hide);

  return (
    <Stack
      as="form"
      spacing="24px"
      w="316px"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <FormControl id="email">
        <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
          EMAIL
        </FormLabel>
        <Input
          type="email"
          {...register("email")}
          placeholder="Endereço de email"
          isRequired
        />
      </FormControl>

      <FormControl id="password">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            SENHA
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type={hide ? "password" : "text"}
            {...register("password")}
            placeholder="Senha"
            isRequired
          />
          <InputRightElement>
            <Box as="button" type="button" onClick={HandleHide} color="#9FA2B4">
              <FaEyeSlash />
            </Box>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        type="submit"
        backgroundColor="blue.850"
        color="white"
        transition="0.4s"
        paddingY="24px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        _hover={{
          filter:
            "brightness(0.7) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        Entrar
      </Button>
    </Stack>
  );
}
