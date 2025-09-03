import { graphqlClient } from "../../shared/graphql/graphqlClient";

export const deleteVideoGame = async (id: string) => {
    const response = await graphqlClient.mutation({
        deleteVideoGame:{
            __args:{
                id: id
            }
        }   
    });
    return response.deleteVideoGame;
;}