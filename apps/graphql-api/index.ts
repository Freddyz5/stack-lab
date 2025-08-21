import { createServer } from 'node:http'
import { yoga } from './api/graphql'

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('🚀 Server ready at http://localhost:4000/graphql')
})
