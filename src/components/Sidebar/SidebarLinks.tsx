import { Divider } from "@chakra-ui/react";
import {
  FaChartPie,
  FaLightbulb,
  FaBook,
  FaCog,
  FaMedal,
} from "react-icons/fa";
import { ActiveLink } from "./ActiveLink";

export function SidebarLinks() {
  return (
    <>
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
    </>
  );
}
