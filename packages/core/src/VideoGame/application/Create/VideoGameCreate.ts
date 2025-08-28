import { VideoGameRepository } from "src/VideoGame/domain/VideoGameRepository";
import { VideoGameCreateRequest } from "./VideoGameCreateRequest";
import { VideoGameTitle } from "src/VideoGame/domain/VideoGameTitle";
import { VideoGame } from "src/VideoGame/domain/VideoGame";
import { VideoGameId } from "src/VideoGame/domain/VideoGameId";

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