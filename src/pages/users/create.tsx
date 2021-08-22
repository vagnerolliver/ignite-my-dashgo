import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"

import { Header } from "../../components/Layout/Header"
import { Aside } from "../../components/Layout/Aside"
import { Input } from "../../components/Form/Input"

export default function CreateUser() {
  return(
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Aside />

        <Box flex="1"borderRadius={8} bg="gray.800" p="8"> 
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8"> 
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="name" label="Nome" /> 
              <Input name="email" label="E-mail" type="email" /> 
            </SimpleGrid>  

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="password" label="Password" type="password" /> 
              <Input name="passwordConfirmation" label="Confirmação da senha" type="password" /> 
            </SimpleGrid>  
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}