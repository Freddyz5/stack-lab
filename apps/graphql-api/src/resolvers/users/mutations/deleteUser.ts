import { UserDelete } from 'core';
import { UserDrizzleRepository } from "core";

export class DeleteUserMutation { 
  private deletes: UserDelete;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.deletes = new UserDelete(repository);
  }

  async run(args: any) {
    await this.deletes.run({ id: args });
  }
}

export const deleteUser = async (_: any, args: any, context: any) => {

  const mutation = new DeleteUserMutation();
  await mutation.run(args.id);

  return true;
};
