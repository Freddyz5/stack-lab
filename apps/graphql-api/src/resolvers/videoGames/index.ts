import { createVideoGame } from "./mutations/createVideoGame";
import { deleteVideoGame } from "./mutations/deleteVideoGame";
import { updateVideoGame } from "./mutations/updateVideoGame";
import { getVideoGame } from "./queries/getVideoGame";
import { getVideoGames } from "./queries/getVideoGames";
import { getVideoGameByTitle } from "./queries/getVideoGameByTitle";

export const videoGamesResolvers = {
  Query: {
    getVideoGame,
    getVideoGames,
    getVideoGameByTitle,
  },
  Mutation: {
    createVideoGame,
    updateVideoGame,
    deleteVideoGame,
  },
};
