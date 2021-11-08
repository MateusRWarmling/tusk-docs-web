import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthContext } from "../../../contexts/AuthContext";

import { Stack, Flex, Button } from "@chakra-ui/react";
import { UserRegister } from "./UserRegister";
import { CompanyRegister } from "./CompanyRegister";

type SignInFormData = {
  email: string;
  password: string;
};

export function RegisterForm() {
  const { register, handleSubmit } = useForm({});
  const { signIn } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<SignInFormData> = ({ email, password }) => {
    signIn({ email, password });
  };

  return (
    <Stack as="form" spacing="24px" onSubmit={handleSubmit(handleSignIn)}>
      <Flex gridGap="24px" flexWrap="wrap" justifyContent="center">
        <UserRegister register={register} />
        <CompanyRegister register={register} />
      </Flex>

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
        Cadastrar
      </Button>
    </Stack>
  );
}
