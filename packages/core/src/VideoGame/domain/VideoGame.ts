import { IsActive } from '../../shared/domain/value-object/IsActive';
import { VideoGameId } from './VideoGameId';
import { StringValue } from '../../shared/domain/value-object/StringValue';
import { State } from './VideoGameState';
import { VideoGameTitle } from './VideoGameTitle';
import { VideoGameDifficulty as Difficulty } from './VideoGameDifficulty';

export class VideoGame {
  readonly id: VideoGameId;
  readonly title: VideoGameTitle;
  readonly description: StringValue;
  readonly genre: StringValue;
  readonly difficulty: Difficulty;
  readonly state: State;
  readonly isActive: IsActive;

  constructor(
    id: VideoGameId,
    title: VideoGameTitle,
    description: StringValue,
    genre: StringValue,
    difficulty: Difficulty,
    state: State,
    isActive: IsActive
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.difficulty = difficulty;
    this.state = state;
    this.isActive = isActive;
  }

  static fromPrimitives(plainData: PlainDataVideoGame): VideoGame {
    return new VideoGame(
      new VideoGameId(plainData.id),
      new VideoGameTitle(plainData.title),
      new StringValue(plainData.description),
      new StringValue(plainData.genre),
      new Difficulty(plainData.difficulty),
      new State(plainData.state),
      new IsActive(plainData.isActive)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      title: this.title.value,
      description: this.description.value,
      genre: this.genre.value,
      difficulty: this.difficulty.value,
      state: this.state.value,
      isActive: this.isActive.value,
    };
  }
}

export interface PlainDataVideoGame {
  id: string;
  title: string;
  description: string;
  genre: string;
  difficulty: string;
  state: string;
  isActive: boolean;
}
