import { 
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader, 
  DrawerOverlay, 
  useBreakpointValue 
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";
 
export function Sidebar() {
  // versão larga da tela
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={true}
        placement="left"
        onClose={() => {}}
       >
        <DrawerOverlay />
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav />    
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="6">
      <SidebarNav />
    </Box>
  )
}