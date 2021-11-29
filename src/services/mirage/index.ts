import { createServer, Model } from 'mirage'

// definir o nome dos campos
// como se fossem colunas no
// banco de dados
type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      // Porque usar o Partial? 
      // a momentos que se pode precisar do user
      // sem informar todos os campos.
      // os usarios salvos no mirage precisam conter o campos do User
      users: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750 // miliseconds, importante pra testar os carregamentos

      // shorthands
      // rotas automatizadas
      this.get('/users')
      this.post('/users')

      this.namespace = ''
      this.passTrought()
    }
  })

  return server;
}