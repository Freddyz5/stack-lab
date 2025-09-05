import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { VideoGame } from "../../shared/types/VideoGames";

export const getVideoGames = async () => {
  const response = await graphqlClient.query({
    getVideoGames: {   
      id: true,
      title: true,
      description: true,
      genre: true,
      difficulty: true,
      state: true 
    }
  });

  return response.getVideoGames;
};