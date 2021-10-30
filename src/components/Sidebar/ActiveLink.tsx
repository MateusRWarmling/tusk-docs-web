import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface ActiveLinkProps {
  title: string;
  href: string;
  svg: ReactElement;
}

export function ActiveLink({ title, href, svg }: ActiveLinkProps) {
  const isLinkActive = () => {
    const location = useLocation();
    if (location.pathname == href) {
      return true;
    } else {
      return false;
    }
  };

  const isActive = isLinkActive();

  return (
    <Flex
      w="100%"
      h="56px"
      backgroundColor={isActive ? "#0F375E" : ""}
      paddingLeft="2rem"
      alignItems="center"
      borderLeft={isActive ? "3px solid" : ""}
      color={isActive ? "#DDE2FF" : "#A4A6B3"}
    >
      <Link to={href}>
        <Flex alignItems="center">
          {svg}
          <Text marginLeft="1.5rem">{title}</Text>
        </Flex>
      </Link>
    </Flex>
  );
}
