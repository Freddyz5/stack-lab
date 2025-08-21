import { EmailInvalidError } from "./Errors/EmailInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";

export class Email extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidEmail(value);
  }

  private ensureIsValidEmail(email: string): void {
    if (!yupString().email().isValidSync(email)) {
      throw new EmailInvalidError(`<${email}> is not a valid email>`);
    }
  }
}
