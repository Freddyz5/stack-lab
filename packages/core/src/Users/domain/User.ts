import { IsActive } from "../../shared/domain/value-object/IsActive";
import { StringValue } from "../../shared/domain/value-object/StringValue";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { Name as UserName } from "../../shared/domain/value-object/Name";
import { UserPassword } from "./UserPassword";

export class User {
  readonly id: UserId;
  readonly email: UserEmail;
  readonly name: UserName;
  readonly lastName: UserName;
  readonly avatar?: StringValue;
  readonly password: UserPassword;
  readonly isActive: IsActive;

  constructor(
    id: UserId,
    email: UserEmail,
    name: UserName,
    lastName: UserName,
    avatar: StringValue,
    password: UserPassword,
    isActive: IsActive,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.avatar = avatar;
    this.password = password;
    this.isActive = isActive;
  }
  static fromPrimitives(plainData: PlainDataUser): User {
    return new User(
      new UserId(plainData.id),
      new UserEmail(plainData.email),
      new UserName(plainData.name),
      new UserName(plainData.lastName),
      new StringValue(plainData.avatar ? plainData.avatar : ""),
      new UserPassword(plainData.password),
      new IsActive(plainData.isActive),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      email: this.email.value,
      name: this.name.value,
      lastName: this.lastName.value,
      avatar: this.avatar?.value,
      password: this.password.value,
      isActive: this.isActive.value,
    };
  }
}

export interface PlainDataUser {
  id: string;
  email: string;
  name: string;
  lastName: string;
  avatar: string | undefined | null;
  password: string;
  isActive: boolean;
}