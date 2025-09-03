import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { VideoGame } from "../../shared/types/VideoGames"; // cambia esto por el tipo que te devuelve el hook

export const getVideoGames = async () => {
    console.log("getVideoGames");
  const response = await graphqlClient.query({
    getVideoGames: {   // coincide exactamente con tu schema
      id: true,
      title: true,
      description: true,
      genre: true,
      difficulty: true,
      state: true,
      isActive: true,
    }
  });

  return response.getVideoGames; // la propiedad debe coincidir con el nombre de la query
};