import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={['1xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      My Dashgo
      <Text as="span" color="pink.500" ml="1">.</Text>
    </Text>
  );
}