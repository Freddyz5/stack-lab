import { UserUpdate } from 'core';
import { UserDrizzleRepository } from "core";

export class UpdateUserMutation { 
  private creator: UserUpdate;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.creator = new UserUpdate(repository);
  }

  async run(args: any) {
    await this.creator.run(args);
  }
}

export const updateUser = async (_: any, args: any, context: any) => {

  const mutation = new UpdateUserMutation();
  await mutation.run(args.input);

  return true;
};
