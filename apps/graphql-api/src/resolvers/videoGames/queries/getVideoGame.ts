import { VideoGameDrizzleRepository, VideoGameFindById, VideoGameRepository } from 'core';

export class GetVideoGameQuery {
  private searcher: VideoGameFindById;

  constructor() {
    const repository = new VideoGameDrizzleRepository();
    this.searcher = new VideoGameFindById(repository);
  }

  async run(args: any) {
    return await this.searcher.run({ id: args });
  }
}

export const getVideoGame = async (_: any, args: any) => {
  const query = new GetVideoGameQuery();
  const videoGame = await query.run(args.id);

  return videoGame;
};
