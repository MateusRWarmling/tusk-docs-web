import { Flex, Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { PagesHeader } from "../../components/PagesHeader";
import { DocumentNumbers } from "./DocumentNumbers";
import { MainPanel } from "./MainPanel";

export function Dashboard() {
  return (
    <Flex>
      <Sidebar />

      <Box padding="2rem" width="100%" marginTop={{ base: "2rem", lg: "0" }}>
        <PagesHeader title="Visão Geral" />
        <Flex
          w="100%"
          justifyContent="center"
          direction="column"
          marginTop="4rem"
          gridGap="5rem"
        >
          <DocumentNumbers />
          <MainPanel />
        </Flex>
      </Box>
    </Flex>
  );
}
