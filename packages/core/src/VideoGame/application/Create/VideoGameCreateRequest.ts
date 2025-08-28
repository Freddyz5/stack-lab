import { PlainDataVideoGame } from "src/VideoGame/domain/VideoGame";

export interface VideoGameCreateRequest extends Omit<PlainDataVideoGame, 'isActive'> {}