export const videoGamesTypeDefs = /* GraphQL */ `
  type VideoGame {
    id: ID!
    title: String!
    description: String!
    genre: String!
    difficulty: String!
    state: String!
    isActive: Boolean!
  }

  input createVideoGameInput {
    title: String!
    description: String!
    genre: String!
    difficulty: String!
    state: String!
  }

  input updateVideoGameInput {
    id: ID!
    title: String
    description: String
    genre: String
    difficulty: String
    state: String
  }

  type Query {
    getVideoGames: [VideoGame!]!
    getVideoGame(id: ID!): VideoGame
    getVideoGameByTitle(title: String!): VideoGame
  }

  type Mutation {
    createVideoGame(input: createVideoGameInput!): Boolean
    updateVideoGame(input: updateVideoGameInput!): Boolean
    deleteVideoGame(id: ID!): Boolean
  }
`;
