import {
  Button,
  Drawer,
  useBreakpointValue,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarComponent } from "./SidebarComponent";
import { GiHamburgerMenu } from "react-icons/gi";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isDrawerSidebar) {
    return (
      <>
        <Button onClick={onOpen} position="absolute" top="4" left="4">
          <GiHamburgerMenu />
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
          <DrawerOverlay>
            <DrawerContent>
              <SidebarComponent />
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }

  return <SidebarComponent />;
}
