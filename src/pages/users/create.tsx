import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import Link from "next/link"
import * as yup from "yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais'),
}).required();

import { Sidebar } from "../../components/Layout/Sidebar/Index"
import { Header } from "../../components/Layout/Header/Index"
import { queryClient } from "../../services/queryClient";
import { Input } from "../../components/Form/Input"
import { api } from "../../services/api";

export default function CreateUser() {
  const router = useRouter()

  const mutation = useMutation(async (user: CreateUserFormData) => {
    const { data } = await api.post('users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return data
  },{ 
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) => {
    const data = await mutation.mutateAsync(values)
    console.log(data)
    router.push('/users')
  }

  return(
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"borderRadius={8}
          bg="gray.800"
          p={["4","8"]}
        >
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["4","8"]}> 
            <SimpleGrid minChildWidth="240px" spacing={["4","8"]} width="100%">
              <Input
                name="name"
                label="Nome"
                error={errors.name}
                {...register('name')}
              />

              <Input
                name="email"
                label="E-mail"
                type="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>  

            <SimpleGrid minChildWidth="240px" spacing={["4","8"]} width="100%">
              <Input
                name="password"
                label="Password"
                type="password"
                error={errors.password}
                {...register('password')}
              />
              
              <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              /> 
            </SimpleGrid>  
          </VStack>

          <Flex mt={["6","8"]} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}>Salvar</Button
              >
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}