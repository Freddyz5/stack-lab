import { VideoGameRepository } from "src/VideoGame/domain/VideoGameRepository";
import { VideoGameFindByTitleRequest } from "./VideoGameFindRequest";
import { VideoGameTitle } from "src/VideoGame/domain/VideoGameTitle";
import { PlainDataVideoGame } from "src/VideoGame/domain/VideoGame";
import { NotFoundError } from "src/shared/domain/value-object/Errors/NotFoundError";


export class VideoGameFindByTitle{
    private repository: VideoGameRepository;

    constructor(repository: VideoGameRepository){
        this.repository=repository;
    }

    async run (request: VideoGameFindByTitleRequest): Promise<PlainDataVideoGame>{
        const videoGame = await this.repository.findByTitle(new VideoGameTitle(request.title));
        if (!videoGame){
            throw new NotFoundError("Video game not found");
        }
        return videoGame.toPrimitives();
    }
}