// import { VideoGameRepository } from "src/VideoGame/domain/VideoGameRepository";
import { VideoGameRepository } from "../../domain/VideoGameRepository";
import { VideoGameCreateRequest } from "./VideoGameCreateRequest";
import { VideoGameTitle } from "../../domain/VideoGameTitle";
import { VideoGame } from "../../domain/VideoGame";
import { VideoGameId } from "../../domain/VideoGameId";

export class VideoGameCreate{
    constructor(
        private repository: VideoGameRepository
    ) { }

    async run (request: VideoGameCreateRequest): Promise<void> {
        const currentVideoGame = await this.repository.findByTitle(new VideoGameTitle(request.title));
        if (currentVideoGame) {
            throw new Error(`Video game with title ${request.title} already exists`);
        }

        const videoGame= VideoGame.fromPrimitives({
            ...request,
            id: VideoGameId.random().value,
            isActive: true,
        });

        await this.repository.save(videoGame);
    }
}