import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { NewUser } from "../../shared/types/Users";

export const createUser = async (newUser: NewUser) => {
  const response = await graphqlClient.mutation({
    createUser: {
      __args: { 
        input: newUser
      }
    },
  });

  return response.createUser
};