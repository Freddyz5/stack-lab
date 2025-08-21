import { UsersSearch } from 'core';
import { UserDrizzleRepository } from "core";

export class GetUsersQuery { 
  private creator: UsersSearch;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.creator = new UsersSearch(repository);
  }

  async run() {
    return await this.creator.run();
  }
}

export const getUsers = async (_: any, args: any) => {

  const query = new GetUsersQuery();
  const users = await query.run();

  return users;
};
