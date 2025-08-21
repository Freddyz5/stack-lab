import { PlainDataUser } from "../../../Users/domain/User";
import { NotFoundError } from "../../../shared/domain/value-object/Errors/NotFoundError";
import { UserEmail } from "../../domain/UserEmail";
import { UserRepository } from "../../domain/UserRepository";
import { UserFindByEmailRequest } from "./UserFindRequest";

export class UserFindByEmail {
  private repository: UserRepository;

  constructor( repository: UserRepository ) {
    this.repository = repository;
  }

  async run(request: UserFindByEmailRequest): Promise<PlainDataUser> {
    const user = await this.repository.findByEmail(new UserEmail(request.email));
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user.toPrimitives();
  }
}