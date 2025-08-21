import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { CreateUserRequest } from "./CreateUserRequest";
import { UserId } from "../../domain/UserId";
import { UserPassword } from "../../domain/UserPassword";
import { UserEmail } from "../../domain/UserEmail";

export class UserCreate {
  constructor(
    private repository: UserRepository
  ) { }

  async run (request: CreateUserRequest): Promise<void> {
    const currentUser = await this.repository.findByEmail(new UserEmail(request.email));

    if (currentUser) {
      throw new Error(`User whit email ${request.email} already exists`);
    }

    const user = User.fromPrimitives({
      ...request,
      id: UserId.random().value,
      password: UserPassword.fromPlainPassword(request.password).value,
      isActive: true,
    });
    
    await this.repository.save(user);
  }
}