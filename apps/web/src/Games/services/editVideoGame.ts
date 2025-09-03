import { graphqlClient } from "../../shared/graphql/graphqlClient";
import { UpdateVideoGameInput } from "../../shared/types/VideoGames";

export const editVideoGame = async (videoGameInput: UpdateVideoGameInput) => {
    const response = await graphqlClient.mutation({
        updateVideoGame:{
            __args:{
                input: videoGameInput
            }

        }
    });

    return response.updateVideoGame;
}