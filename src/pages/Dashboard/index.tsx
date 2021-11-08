import { Flex, Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { PagesHeader } from "../../components/PagesHeader";
import { DocumentNumbers } from "./DocumentNumbers";

export function Dashboard() {
  return (
    <Flex>
      <Sidebar />
      <Box padding="2rem" width="100%">
        <PagesHeader title="Visão Geral" />
        <Flex
          w="100%"
          justifyContent="center"
          direction="column"
          marginTop="4rem"
        >
          <DocumentNumbers />
        </Flex>
      </Box>
    </Flex>
  );
}
