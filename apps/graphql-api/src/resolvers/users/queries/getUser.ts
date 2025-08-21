import { UserFindById } from 'core';
import { UserDrizzleRepository } from "core";

export class GetUserQuery { 
  private searcher: UserFindById;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.searcher = new UserFindById(repository);
  }

  async run(args: any) {
    return await this.searcher.run({ id: args });
  }
}

export const getUser = async (_: any, args: any) => {

  const query = new GetUserQuery();
  const user = await query.run(args.id);

  return user;
};
