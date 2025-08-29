import { VideoGameDelete } from 'core';
import { VideoGameDrizzleRepository } from 'core';

export class DeleteVideoGameMutation {
  private deletes: VideoGameDelete;

  constructor() {
    const repository = new VideoGameDrizzleRepository();
    this.deletes = new VideoGameDelete(repository);
  }

  async run(args: any) {
    await this.deletes.run({ id: args });
  }
}

export const deleteVideoGame = async (_: any, args: any, context: any) => {
  const mutation = new DeleteVideoGameMutation();
  await mutation.run(args.id);

  return true;
};
