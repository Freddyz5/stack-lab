import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { UserLogin } from "../../shared/types/Users";

export const simpleLogin = async (user: UserLogin) => {
  const response = await graphqlClient.query({
    getUserByEmail: {
      __args: { email: user.email },
      id: true,
      name: true,
      lastName: true,
      email: true,
    }
  });

  return response.getUserByEmail;
};