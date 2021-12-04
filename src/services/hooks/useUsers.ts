import { useQuery } from "react-query"

import { api } from "../api"

type Users = {
  id: string
  name: string
  email: string
  createdAt: string
}

async function getUsers(): Promise<Users[]> {
  const { data } = await api.get('http://localhost:3001/api/users')

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
  
  return users
}

export function useUsers() {
  // primeiro parametro é a chave usada no cache
  return useQuery('users', getUsers , {
    // garante por 5 segundos que os dados estao frescos
    // dado que eu "saio da aplicacao" e volto em 5 segundos o react-query 
    // nao faz o refetch
    staleTime: 1000 * 5 // 5 segundos
  })
}