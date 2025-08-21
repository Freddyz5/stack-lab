import { graphqlClient as createGraphqlClient} from "graphql-client";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

if (!endpoint) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_ENDPOINT is not defined');
}

export const graphqlClient = createGraphqlClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!);
