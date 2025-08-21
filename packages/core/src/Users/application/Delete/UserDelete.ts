import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";
import { UserDeleteRequest } from "./UserDeleteRequest";

export class UserDelete {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(request: UserDeleteRequest): Promise<void> {
    await this.repository.delete(new UserId(request.id));
  }
}