import { Flex, Text, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export function SignOutButton() {
  const { signOut } = useContext(AuthContext);
  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push("/login");
    window.location.reload();
  }

  return (
    <Flex
      w="100%"
      h="56px"
      paddingLeft="2rem"
      alignItems="center"
      color="#A4A6B3"
    >
      <Box as="button" onClick={() => handleSignOut()}>
        <Flex alignItems="center">
          <FaSignOutAlt />
          <Text marginLeft="1.5rem">Sair</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
