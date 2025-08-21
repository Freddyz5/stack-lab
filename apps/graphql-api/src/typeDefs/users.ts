export const userTypeDefs = /* GraphQL */`
  type User {
    id: ID!
    email: String!
    name: String!
    lastName: String!
    avatar: String!
    password: String!
    isActive: Boolean!
  }

  type UserBoard {
    id: ID!
    email: String!
    name: String!
    lastName: String!
  }

  input createUserInput {
    email: String!
    lastName: String!
    name: String!
    password: String!
    avatar: String
  }

  input updateUserInput {
    id: ID!
    email: String
    lastName: String
    name: String
    password: String
    avatar: String
  }

  type Query {
    getUsers: [User!]!
    getUser(id: ID!): User
    getUserByEmail(email: String!): UserBoard
  }

  type Mutation {
    createUser(input: createUserInput!): Boolean
    updateUser(input: updateUserInput!): Boolean
    deleteUser(id: ID!): Boolean
  }
`;

