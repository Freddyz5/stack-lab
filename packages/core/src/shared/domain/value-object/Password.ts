import { PasswordInvalidError } from "./Errors/PasswordInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";
import { compare as _compare, hashSync } from "bcryptjs";

const SALT = 12;

export class Password extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidPassword(value);
  }

  private ensureIsValidPassword(password: string): void {
    if (!yupString().min(5).isValidSync(password)) {
      throw new PasswordInvalidError(`<${password}> is not a valid password>`);
    }
  }

  private static encript(password: string): string {
    return hashSync(password, SALT);
  }

  static fromPlainPassword(password: string): Password {
    return new Password(this.encript(password));
  }

  public async compare(password: string): Promise<Boolean> {
    return _compare(password, this.value);
  }
}
