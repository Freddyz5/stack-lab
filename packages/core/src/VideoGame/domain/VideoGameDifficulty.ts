import { DifficultyInvalidError } from "src/shared/domain/value-object/Errors/DifficultyInvalidError";
import { ValueObject } from "src/shared/domain/value-object/ValueObject";
import { string as yupString } from "yup";

export class VideoGameDifficulty extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidDifficulty(value);
  }

  private ensureIsValidDifficulty(value: string): void {
    try {
      yupString()
        .oneOf(["facil", "medio", "dificil", "experto"])
        .required()
        .validateSync(value);
    } catch {
      throw new DifficultyInvalidError(value);
    }
  }
}

