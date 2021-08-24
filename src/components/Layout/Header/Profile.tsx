import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vagner Oliveira</Text>
        <Text color="gray.500" fontSize="small">
          vagner.olliver@yahoo.com
        </Text>
      </Box>
      <Avatar
        name="Vagner Oliveira"
        size="md"
      />
    </Flex>
  );
}