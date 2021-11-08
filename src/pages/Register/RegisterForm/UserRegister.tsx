import {
  FormLabel,
  Input,
  Box,
  Flex,
  FormControl,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";

type UserRegister = {
  register: UseFormRegister<FieldValues>;
};

export const UserRegister = ({ register }: UserRegister) => {
  const [hide, setHide] = useState(true);

  const HandleHide = () => setHide(!hide);

  return (
    <Stack>
      <FormControl id="username">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            NOME
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type="text"
            {...register("username")}
            placeholder="Nome de usuário"
            isRequired
          />
        </InputGroup>
      </FormControl>

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

      <FormControl id="repeated-password">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            REPETIR SENHA
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
    </Stack>
  );
};
