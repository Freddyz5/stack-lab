import { VideoGameRepository } from "../../domain/VideoGameRepository";
import { VideoGameFindByIdRequest } from "./VideoGameFindRequest";
import { PlainDataVideoGame } from "../../domain/VideoGame";
import { VideoGameId } from "../../domain/VideoGameId";


export class VideoGameFindById {
    private repository: VideoGameRepository;

    constructor (repository: VideoGameRepository) {
        this.repository = repository;
    }

    async run (request: VideoGameFindByIdRequest): Promise<PlainDataVideoGame> {
        const videoGame = await this.repository.findById(new VideoGameId(request.id));
        if (!videoGame) {
            throw new Error("Video game not found");
        }
        return videoGame.toPrimitives();
    }
}