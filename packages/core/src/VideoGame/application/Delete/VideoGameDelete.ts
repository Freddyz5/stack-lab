import { VideoGameRepository } from 'src/VideoGame/domain/VideoGameRepository';
import { VideoGameDeleteRequest } from './VideoGameDeleteRequest';
import { VideoGameId } from 'src/VideoGame/domain/VideoGameId';

export class VideoGameDelete {
  private repository: VideoGameRepository;

  constructor(repository: VideoGameRepository) {
    this.repository = repository;
  }

  async run(request: VideoGameDeleteRequest): Promise<void> {
    await this.repository.delete(new VideoGameId(request.id));
  }
}
