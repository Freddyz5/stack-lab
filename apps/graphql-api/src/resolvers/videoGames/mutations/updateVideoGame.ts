import { VideoGameUpdate } from 'core';
import { VideoGameDrizzleRepository } from 'core';

export class UpdateVideoGameMutation {
  private updater: VideoGameUpdate;

  constructor() {
    const repository = new VideoGameDrizzleRepository();
    this.updater = new VideoGameUpdate(repository);
  }

  async run(args: any) {
    await this.updater.run(args);
  }
}

export const updateVideoGame = async (_: any, args: any, context: any) => {
  const mutation = new UpdateVideoGameMutation();
  await mutation.run(args.input);

  return true;
};
