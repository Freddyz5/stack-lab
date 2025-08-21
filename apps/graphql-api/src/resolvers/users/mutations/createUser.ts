import { UserCreate } from 'core';
import { UserDrizzleRepository } from "core";

export class CreateUserMutation { 
  private creator: UserCreate;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.creator = new UserCreate(repository);
  }

  async run(args: any) {
    await this.creator.run(args);
  }
}

export const createUser = async (_: any, args: any, context: any) => {

  const mutation = new CreateUserMutation();
  await mutation.run(args.input);

  return true;
};
