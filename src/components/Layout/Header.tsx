import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      h="20"
      mt="4"
      maxWidth={1480}
      px="6"
      w="100%"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        My Dashgo
        <Text as="span" color="pink.500" ml="1">.</Text>
      </Text>

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
        
      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          borderColor="gray.700"
          borderRightWidth={1}
          color="gray.300"
          mx="8"
          pr="8"
          py="1"
          spacing="8"
        >         
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
      
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
      </Flex>  
    </Flex>
  )
}