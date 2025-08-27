import { PlainDataVideoGame } from "src/VideoGame/domain/VideoGame";

export interface VideoGameUpdateRequest extends Partial<PlainDataVideoGame>{
    id: string;

}