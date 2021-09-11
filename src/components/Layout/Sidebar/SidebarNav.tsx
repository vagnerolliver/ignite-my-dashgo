import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Stack } from "@chakra-ui/react";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="fle">
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine} text="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} text="Usuário" />
      </NavSection>
      
      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine} text="Formulários" />
        <NavLink href="/automation" icon={RiGitMergeLine} text="Automação" />
      </NavSection>
    </Stack>
  )
}