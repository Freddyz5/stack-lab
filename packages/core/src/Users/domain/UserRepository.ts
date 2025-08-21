import { Nullable } from "../../shared/domain/value-object/Nullable";
import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export interface UserRepository {
  save(user: User): Promise<void>;
  search(id: UserId): Promise<Nullable<User>>;
  searchAll(): Promise<User[]>;
  // matching(criteria: Criteria): Promise<User[]>;
  delete(id: UserId): Promise<void>;
  findByEmail(email: UserEmail): Promise<Nullable<User>>;
}