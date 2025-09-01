import { VideoGameRepository } from '../../domain/VideoGameRepository';
import { VideoGameDeleteRequest } from './VideoGameDeleteRequest';
import { VideoGameId } from '../../domain/VideoGameId';

export class VideoGameDelete {
  private repository: VideoGameRepository;

  constructor(repository: VideoGameRepository) {
    this.repository = repository;
  }

  async run(request: VideoGameDeleteRequest): Promise<void> {
    await this.repository.delete(new VideoGameId(request.id));
  }
}
