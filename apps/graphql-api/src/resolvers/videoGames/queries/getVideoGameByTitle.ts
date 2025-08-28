import { VideoGameFindByTitle, VideoGameDrizzleRepository } from 'core';

export class GetVideoGameByTitleQuery {
  private searcher: VideoGameFindByTitle;

  constructor() {
    const repository = new VideoGameDrizzleRepository();
    this.searcher = new VideoGameFindByTitle(repository);
  }

  async run(args: any) {
    return await this.searcher.run({ title: args });
  }
}

export const GetVideoGameByTitle = async (_: any, args: any) => {
  const query = new GetVideoGameByTitleQuery();
  const videoGame = await query.run(args.title);

  return videoGame;
};
