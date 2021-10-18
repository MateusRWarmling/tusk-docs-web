import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface ActiveLinkProps {
  title: string;
  href: string;
}

export function ActiveLink({ title, href }: ActiveLinkProps) {
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
    <>
      {isActive ? (
        <Box borderBottom="2px" _hover={{ textDecoration: "none" }}>
          <Link to={href}>{title}</Link>
        </Box>
      ) : (
        <Box _hover={{ textDecoration: "none" }}>
          <Link to={href}>{title}</Link>
        </Box>
      )}
    </>
  );
}
