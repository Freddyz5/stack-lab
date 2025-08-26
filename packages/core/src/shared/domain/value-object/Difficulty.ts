import { DifficultyInvalidError } from "./Errors/DifficultyInvalidError";
import { ValueObject } from "./ValueObject";
import { string as yupString } from "yup";

export class Difficulty extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidDifficulty(value);
  }

  private ensureIsValidDifficulty(value: string): void {
    try {
      yupString()
        .oneOf(["Facil", "Medio", "Dificil", "Experto"])
        .required()
        .validateSync(value);
    } catch {
      throw new DifficultyInvalidError(value);
    }
  }
}