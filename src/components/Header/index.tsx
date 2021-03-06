import { Flex } from "@chakra-ui/react";
import { RegisterButton } from "./RegisterButton";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <Flex
      marginBottom="67px"
      height="98px"
      width="100%"
      borderBottom="1px"
      borderColor="rgba(211, 211, 211, .4)"
      padding="1rem"
    >
      <Flex w="1200px" marginX="auto" justifyContent="flex-end">
        <Flex
          width="400px"
          alignItems="center"
          justifyContent="flex-end"
          gridGap="2rem"
          fontFamily="poppins"
          fontWeight="semibold"
          color="blue.850"
        >
          <ActiveLink title="Home" href="/" />
          <ActiveLink title="Login" href="/login" />
          <RegisterButton />
        </Flex>
      </Flex>
    </Flex>
  );
}
