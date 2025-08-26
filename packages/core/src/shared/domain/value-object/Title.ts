import { TitleInvalidError } from "./Errors/TitleInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";


export class Title extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidTitle(value);
  }

  private ensureIsValidTitle(title: string): void {
    if (!yupString().required().min(4).isValidSync(title)) {
      throw new TitleInvalidError(
        `<${title}> is not a valid title. Should be a string with 4 chars as min>`
      );
    }
  }
}