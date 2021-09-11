import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
 
import { ActiveLink } from "../../ActiveLink/Index";
interface NavLinkProps extends ChakraLinkProps {
  text: string;
  icon: ElementType,
  href: string
}

export function NavLink({ text, icon, href,...rest }: NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{text}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}