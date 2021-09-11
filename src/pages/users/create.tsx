import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link"

import { Sidebar } from "../../components/Layout/Sidebar/Index"
import { Header } from "../../components/Layout/Header/Index"
import { Input } from "../../components/Form/Input"

export default function CreateUser() {
  return(
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1"borderRadius={8} bg="gray.800" p={["4","8"]}> 
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["4","8"]}> 
            <SimpleGrid minChildWidth="240px" spacing={["4","8"]} width="100%">
              <Input name="name" label="Nome" /> 
              <Input name="email" label="E-mail" type="email" /> 
            </SimpleGrid>  

            <SimpleGrid minChildWidth="240px" spacing={["4","8"]} width="100%">
              <Input name="password" label="Password" type="password" /> 
              <Input name="passwordConfirmation" label="Confirmação da senha" type="password" /> 
            </SimpleGrid>  
          </VStack>

          <Flex mt={["6","8"]} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}