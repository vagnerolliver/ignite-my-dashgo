import { useQuery } from "react-query"

import { api } from "../api"

type Users = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  totalCount: number,
  users: Users[]
}

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', { 
    params: { 
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user =>  {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  
  return { users, totalCount }
}

export function useUsers(page: number) {
  // primeiro parametro é a chave usada no cache
  return useQuery(['users', page], () => getUsers(page) , {
    // garante por 5 segundos que os dados estao frescos
    // dado que eu "saio da aplicacao" e volto em 5 segundos o react-query 
    // nao faz o refetch
    staleTime: 1000 * 5 // 5 segundos
  })
}