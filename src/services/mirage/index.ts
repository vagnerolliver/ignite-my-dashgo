import { createServer, Model, Factory, Response } from 'miragejs'
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
      user: Model.extend<Partial<User>>({})
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
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length
 
        // 10 ... 20 
        const pageStart = (Number(page) -1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      })

      this.post('/users')
      this.get('/users/:id')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server;
}