import { PlainDataUser } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UsersSearch {
  private repository: UserRepository;

  constructor( repository: UserRepository ) {
    this.repository = repository;
  }

  async run(): Promise<PlainDataUser[]> {
    const users = await this.repository.searchAll();
    if (!users) {
      throw new Error("Users not found");
    }

    return users.map(user => user.toPrimitives());
  }
}