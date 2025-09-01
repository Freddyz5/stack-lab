import { PlainDataVideoGame } from "../../domain/VideoGame";

export interface VideoGameUpdateRequest extends Partial<PlainDataVideoGame>{
    id: string;

}