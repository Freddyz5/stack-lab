import { StateInvalidError } from "./Errors/StateInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";

export class State extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidState(value);
  }

  private ensureIsValidState(value: string): void {
    try {
      yupString()
        .oneOf(["Por Jugar", "No Jugado", "Quiero Jugar", "Jugando", "Jugado"])
        .required()
        .validateSync(value);
    } catch {
      throw new StateInvalidError(value);
    }
  }
}