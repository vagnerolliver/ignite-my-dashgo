import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  text: string;
  icon: ElementType
}

export function NavLink({ text, icon, ...rest }: NavLinkProps){
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>
  );
}