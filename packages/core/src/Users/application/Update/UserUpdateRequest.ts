import { PlainDataUser } from "../../domain/User";

export interface UserUpdateRequest extends Partial<PlainDataUser> {
  id: string;
};
