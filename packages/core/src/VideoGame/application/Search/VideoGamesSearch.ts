import { PlainDataVideoGame } from '../../domain/VideoGame';
import { VideoGameRepository } from '../../domain/VideoGameRepository';

export class VideoGamesSearch {
  private repository: VideoGameRepository;

  constructor(repository: VideoGameRepository) {
    this.repository = repository;
  }

  async run(): Promise<PlainDataVideoGame[]> {
    const videoGames = await this.repository.searchAll();
    if (!videoGames) {
      throw new Error('Video games not found');
    }
    return videoGames.map(videoGame => videoGame.toPrimitives());
  }
}
