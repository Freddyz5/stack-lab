import { PlainDataUser } from "../../domain/User";

export interface CreateUserRequest extends Omit<PlainDataUser, "isActive"> {}