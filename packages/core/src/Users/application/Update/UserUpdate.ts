import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserFindById } from "../Find/UserFindById";
import { UserUpdateRequest } from "./UserUpdateRequest";

export class UserUpdate {
  private repository: UserRepository
  private userFind: UserFindById;

  constructor(repository: UserRepository) {
    this.repository = repository;
    this.userFind = new UserFindById(repository);
  }

  async run(request: UserUpdateRequest): Promise<void> {
    const currentUser = await this.userFind.run({ id: request.id });

    const userToUpdate = User.fromPrimitives({
      ...currentUser,
      ...request,
    })
      
    await this.repository.save(userToUpdate);
  }
}