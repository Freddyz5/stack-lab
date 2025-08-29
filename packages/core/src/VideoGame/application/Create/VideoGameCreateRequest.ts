import { PlainDataVideoGame } from "../../domain/VideoGame";

export interface VideoGameCreateRequest extends Omit<PlainDataVideoGame, 'isActive'> {}