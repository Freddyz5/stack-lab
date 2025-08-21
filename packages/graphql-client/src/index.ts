import { createClient } from './generated';

export const graphqlClient = (url: string) => createClient({
  url,
});
