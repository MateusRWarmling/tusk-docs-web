import { Flex, Box } from "@chakra-ui/react";
import { PagesHeader } from "../../components/PagesHeader";
import { Sidebar } from "../../components/Sidebar";
import { ClientTable } from "./ClientTable";

export function Clients() {
  return (
    <Flex>
      <Sidebar />

      <Box padding="2rem" width="100%" marginTop={{ base: "2rem", lg: "0" }}>
        <PagesHeader title="Clientes" />
        <ClientTable />
      </Box>
    </Flex>
  );
}
