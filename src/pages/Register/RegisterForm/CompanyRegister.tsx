import {
  FormLabel,
  Input,
  Flex,
  FormControl,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type CompanyRegister = {
  register: UseFormRegister<FieldValues>;
};

export const CompanyRegister = ({ register }: CompanyRegister) => {
  return (
    <Stack width="255px">
      <FormControl id="legalName">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            EMPRESA
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type="text"
            {...register("legalName")}
            placeholder="Nome da empresa"
            isRequired
          />
        </InputGroup>
      </FormControl>

      <FormControl id="businessName">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            NOME FANTASIA
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type="text"
            {...register("businessName")}
            placeholder="Nome fantasia"
            isRequired
          />
        </InputGroup>
      </FormControl>

      <FormControl id="registration">
        <Flex alignItems="baseline" justifyContent="space-between">
          <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
            Registro
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type="text"
            {...register("registration")}
            placeholder="0000000000"
            isRequired
          />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};
