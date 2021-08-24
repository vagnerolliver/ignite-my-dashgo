import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"

import { Sidebar } from "../../components/Layout/Sidebar/Index"
import { Pagination } from "../../components/Pagination/Index"
import { Header } from "../../components/Layout/Header/Index"

export default function UserList() {
  return(
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1"borderRadius={8} bg="gray.800" p="8"> 
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine}/>}
            >
              Criar novo
            </Button>
          </Flex>
                
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de Cadastro</Th>
                <Th>Editar</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td px="6">
                  <Box>
                    <Text fontWeight="bold">Vágner Silveira</Text>
                    <Text fontSize="sm" color="gray.300">vagner.olliver@gmail.com</Text>
                  </Box>
                </Td>
                <Td fontSize="sm">19 de Agosto. 2021</Td>
                <Td width="1">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td px="6">
                  <Box>
                    <Text fontWeight="bold">Vágner Silveira</Text>
                    <Text fontSize="sm" color="gray.300">vagner.olliver@gmail.com</Text>
                  </Box>
                </Td>
                <Td fontSize="sm">19 de Agosto. 2021</Td>
                <Td width="1">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td px="6">
                  <Box>
                    <Text fontWeight="bold">Vágner Silveira</Text>
                    <Text fontSize="sm" color="gray.300">vagner.olliver@gmail.com</Text>
                  </Box>
                </Td>
                <Td fontSize="sm">19 de Agosto. 2021</Td>
                <Td width="1">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}