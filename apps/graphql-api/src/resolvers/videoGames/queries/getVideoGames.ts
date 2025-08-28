import { VideoGamesSearch } from 'core';
import { VideoGameDrizzleRepository } from 'core';

export class GetVideoGamesQuery {
  private creator: VideoGamesSearch;
  constructor() {
    const repository = new VideoGameDrizzleRepository();
    this.creator = new VideoGamesSearch(repository);
  }

  async run() {
    return await this.creator.run();
  }
}

export const getVideoGames = async (_: any, args: any) => {
  const query = new GetVideoGamesQuery();
  const videoGames = await query.run();

  return videoGames;
};
