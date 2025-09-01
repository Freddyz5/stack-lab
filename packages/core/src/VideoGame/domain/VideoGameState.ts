import { StateInvalidError } from "../../shared/domain/value-object/Errors/StateInvalidError";
import { ValueObject } from "../../shared/domain/value-object/ValueObject";
import { string as yupString } from "yup";

export class State extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidState(value);
  }

  private ensureIsValidState(value: string): void {
    try {
      yupString()
        .oneOf(["por jugar", "no jugado", "quiero jugar", "jugando", "jugado"])
        .required()
        .validateSync(value);
    } catch {
      throw new StateInvalidError(value);
    }
  }
}