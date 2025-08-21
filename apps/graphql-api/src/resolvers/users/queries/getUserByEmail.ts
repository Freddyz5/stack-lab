import { UserFindByEmail, UserDrizzleRepository } from "core";

export class GetUserByEmailQuery {
  private searcher: UserFindByEmail;

  constructor() {
    const repository = new UserDrizzleRepository();
    this.searcher = new UserFindByEmail(repository);
  }

  async run(args: any) {
    return await this.searcher.run({ email: args });
  }
}

export const getUserByEmail = async (_: any, args: any) => {

  const query = new GetUserByEmailQuery();
  const user = await query.run(args.email);

  return user;
};