import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { NewVideoGame } from "../../shared/types/VideoGames";

export const createVideoGame = async (newVideoGame: NewVideoGame)=>{
    const response = await graphqlClient.mutation({
        createVideoGame:{
            __args:{
                input: newVideoGame
            }

        }
    });

    return response.createVideoGame;
}