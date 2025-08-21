import { NotFoundError } from "../../../shared/domain/value-object/Errors/NotFoundError";
import { PlainDataUser } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";
import { UserFindByIdRequest } from "./UserFindRequest";

export class UserFindById {
  private repository: UserRepository;

  constructor( repository: UserRepository ) {
    this.repository = repository;
  }

  async run(request: UserFindByIdRequest): Promise<PlainDataUser> {
    const user = await this.repository.search(new UserId(request.id));
    if (!user) {
      throw new NotFoundError("User not found");
    }
    
    return user.toPrimitives();
  }
}