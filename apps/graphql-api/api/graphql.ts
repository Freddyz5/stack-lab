import { createYoga } from 'graphql-yoga'
import { schema } from '../src/schema'

export const yoga = createYoga({
  schema,
  graphqlEndpoint: '/graphql',
  graphiql: true,
})

export default yoga
