import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){
  return (
    <Flex 
      as="label"
      flex="1"
      alignSelf="center"
      borderRadius="full"
      bg="gray.800"
      color="gray.200"
      maxWidth={400}
      ml="6"
      position="relative"
      py="4"
      px="8"
    > 
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na Plataforma"
        mr="4"
        _placeholder={{
          color:"gray.400"
        }} 
        px="4"
      />    

      <Icon as={RiSearchLine} fontSize="28" />
    </Flex>
  );
}