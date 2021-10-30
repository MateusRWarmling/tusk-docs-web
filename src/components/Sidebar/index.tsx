import { Flex, Avatar, Divider, Text } from "@chakra-ui/react";
import {
  FaChartPie,
  FaLightbulb,
  FaBook,
  FaCog,
  FaMedal,
} from "react-icons/fa";
import { ActiveLink } from "./ActiveLink";

export function Sidebar() {
  return (
    <Flex
      backgroundColor="blue.850"
      h="100vh"
      maxW="16rem"
      w="100%"
      alignItems="center"
      direction="column"
    >
      <Avatar
        maxW="153px"
        maxH="153px"
        w="100%"
        h="100%"
        mt="4.3rem"
        mb="2rem"
      />
      <ActiveLink href="/dashboard" title="Visão Geral" svg={<FaChartPie />} />
      <ActiveLink href="/clients" title="Clientes" svg={<FaLightbulb />} />
      <ActiveLink href="/documents" title="Documentos" svg={<FaBook />} />
      <Divider borderColor="#0F3860" marginY="1rem" />
      <ActiveLink
        href="/configurations"
        title="Configurações"
        svg={<FaCog />}
      />
      <ActiveLink href="/subscription" title="Inscrição" svg={<FaMedal />} />
      <Text marginTop="auto" marginBottom="1rem" color="white">
        Tusk Docs © 2021
      </Text>
    </Flex>
  );
}
