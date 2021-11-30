import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

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

    // gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `${faker.name.firstName()} ${faker.name.lastName()}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    // criar os dados assim que o server inicializar
    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750 // miliseconds, importante pra testar os carregamentos

      // shorthands
      // rotas automatizadas
      this.get('/users')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server;
}