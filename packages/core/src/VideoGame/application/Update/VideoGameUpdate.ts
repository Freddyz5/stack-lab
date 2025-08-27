import { VideoGameRepository } from 'src/VideoGame/domain/VideoGameRepository';
import { VideoGameFindById } from '../Find/VideoGameFindById';
import { VideoGame } from 'src/VideoGame/domain/VideoGame';
import { VideoGameUpdateRequest } from './VideoGameUpdateRequest';

export class VideoGameUpdate {
  private repository: VideoGameRepository;
  private videoGameFind: VideoGameFindById;

  constructor(repository: VideoGameRepository) {
    this.repository = repository;
    this.videoGameFind = new VideoGameFindById(repository);
  }

  async run(request: VideoGameUpdateRequest): Promise<void> {
    const currentVideoGame = await this.videoGameFind.run({ id: request.id });

    const videoGameToUpdate = VideoGame.fromPrimitives({
      ...currentVideoGame,
      ...request,
    });

    await this.repository.save(videoGameToUpdate);
  }
}
