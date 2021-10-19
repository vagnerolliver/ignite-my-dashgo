import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignin: SubmitHandler<SignInFormData> = async(values) => {
    await new Promise(resolve => setTimeout(resolve,2000))

    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      > 
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="Email" 
            id="email"
            {...register('email')} 
          /> 
          <Input 
            name="password" 
            type="password" 
            label="Password" 
            id="password"
            {...register('password')}
          /> 
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          entrar
        </Button>
      </Flex> 
    </Flex>
  )
}
