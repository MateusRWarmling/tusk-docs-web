import { Divider } from "@chakra-ui/react";
import { FaChartPie, FaLightbulb, FaBook } from "react-icons/fa";
import { SignOutButton } from "./SignOutButton";
import { ActiveLink } from "./ActiveLink";

export function SidebarLinks() {
  return (
    <>
      <ActiveLink href="/dashboard" title="Visão Geral" svg={<FaChartPie />} />
      <ActiveLink href="/clients" title="Clientes" svg={<FaLightbulb />} />
      <ActiveLink href="/documents" title="Documentos" svg={<FaBook />} />
      <Divider borderColor="#0F3860" marginY="1rem" />
      <SignOutButton />
    </>
  );
}
