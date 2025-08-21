

import { FullNameInvalidError } from "./Errors/FullNameInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";

export class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidFullName(value);
  }

  private ensureIsValidFullName(fullName: string): void {
    if (!yupString().required().min(2).isValidSync(fullName)) {
      throw new FullNameInvalidError(
        `<${fullName}> is not a valid full name. Should be a string with 2 chars as min>`
      );
    }
  }
}
