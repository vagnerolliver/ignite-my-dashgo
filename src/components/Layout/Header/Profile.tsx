import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps){
  return (
    <Flex align="center">
      {showProfileData && (
          <Box mr="4" textAlign="right">
          <Text>Vagner Oliveira</Text>
          <Text color="gray.500" fontSize="small">
            vagner.olliver@yahoo.com
          </Text>
        </Box>
      )}
      
      <Avatar
        name="Vagner Oliveira"
        size="md"
      />
    </Flex>
  );
}