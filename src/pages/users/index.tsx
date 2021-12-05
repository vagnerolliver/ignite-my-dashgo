import { Box, Link, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { useState } from 'react'
import NextLink from "next/link"

import { Sidebar } from "../../components/Layout/Sidebar/Index"
import { Pagination } from "../../components/Pagination/Index"
import { Header } from "../../components/Layout/Header/Index"
import { useUsers } from "../../services/hooks/useUsers"
import { queryClient } from "../../services/queryClient"
import { api } from "../../services/api"
 

// react query 
// stale while revalidate
// revalidade on focus

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const { data } = await api.get(`users/${userId}`)

      return data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

  // useEffect( [])

  return(
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1"borderRadius={8} bg="gray.800" p={["4","8"]}> 
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              
              { !isLoading && isFetching  && <Spinner size="sm" color="grey.500" ml="4" /> }
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine}/>}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
             <Spinner size="sm" color="grey.500" ml="4" />
            </Flex>
          ) : error ? (
            <Text>Falha ao obter dados do usuários.</Text>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuários</Th>
                    { isWideVersion && (<Th>Data de Cadastro</Th>) }
                    <Th>{ isWideVersion ? 'Editar' : '' }</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  { data.users.map(user => (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>

                        { isWideVersion && (<Td fontSize="sm">{user.createdAt}</Td>) }
                        
                        <Td width="1">
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine}/>}
                          >
                            { isWideVersion ? 'Editar' : '' }
                          </Button>
                        </Td>
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>

              <Pagination  
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}