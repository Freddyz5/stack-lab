import { VideoGame } from "./VideoGame";
import { VideoGameId } from "./VideoGameId";
import { VideoGameTitle } from "./VideoGameTitle";

export interface VideoGameRepository {
  save(videoGame: VideoGame): Promise<void>;
  search(id: VideoGameId): Promise<VideoGame | null>;
  findByTitle(title: VideoGameTitle): Promise<VideoGame | null>;
  delete(id: VideoGameId): Promise<void>;
  searchAll(): Promise<VideoGame[]>;
}