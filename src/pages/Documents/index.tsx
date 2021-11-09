import { Flex, Box } from "@chakra-ui/react";
import { PagesHeader } from "../../components/PagesHeader";
import { Sidebar } from "../../components/Sidebar";
import { DocumentsTable } from "./DocumentsTable";

export function Documents() {
  return (
    <Flex>
      <Sidebar />

      <Box padding="2rem" width="100%">
        <PagesHeader title="Documentos" />
        <DocumentsTable />
      </Box>
    </Flex>
  );
}
