import { db, games as videoGames, eq } from 'client-db';
import { VideoGame } from '../domain/VideoGame';
import { VideoGameId } from '../domain/VideoGameId';
import { Nullable } from '../../shared/domain/value-object/Nullable';
import { VideoGameTitle } from '../domain/VideoGameTitle';
import { VideoGameRepository } from '../domain/VideoGameRepository';

export class VideoGameDrizzleRepository implements VideoGameRepository {
  protected table: typeof videoGames = videoGames;

  async save(videoGame: VideoGame): Promise<void> {
    const currentVideoGame = await db
      .select()
      .from(videoGames)
      .where(eq(videoGames.id, videoGame.id.value));

    if (currentVideoGame.length !== 0) {
      await db
        .update(videoGames)
        .set({
          ...videoGame.toPrimitives(),
          modifiedAt: new Date(),
        })
        .where(eq(videoGames.id, videoGame.id.value));

      console.log('Video game updated! 🎮');
    } else {
      await db.insert(videoGames).values({
        ...videoGame.toPrimitives(),
        modifiedAt: new Date(),
      });

      console.log('New video game created! 🕹️');
    }

    return Promise.resolve();
  }

  async findById(id: VideoGameId): Promise<VideoGame | null> {
    const currentvideoGame = await db
    .select()
    .from(videoGames)
    .where(eq(videoGames.id, id.value));

    if (!currentvideoGame[0]) {
      return null;
    }

    return VideoGame.fromPrimitives({
      ...currentvideoGame[0],
      genre: currentvideoGame[0].genre ?? '',
      difficulty: currentvideoGame[0].difficulty ?? '',
      state: currentvideoGame[0].state ?? '',
    });
  }

  async findByTitle(title: VideoGameTitle): Promise<VideoGame | null> {
    const result = await db.query.games.findFirst({
      where: eq(videoGames.title, title.value),
    });
    if (!result) {
      return null;
    }

    return VideoGame.fromPrimitives({
      ...result,
      genre: result.genre ?? '',
      difficulty: result.difficulty ?? '',
      state: result.state ?? '',
    });
  }

  async searchAll(): Promise<VideoGame[]> {
    const currentVideoGames = await db
      .select()
      .from(videoGames)
      .where(eq(videoGames.isActive, true));

    return currentVideoGames.map((videoGame) =>
      VideoGame.fromPrimitives({
        ...videoGame,
        genre: videoGame.genre ?? '',
        difficulty: videoGame.difficulty ?? '',
        state: videoGame.state ?? '',
      })
    );
  }

  async delete(id: VideoGameId): Promise<void> {
    await db
      .update(videoGames)
      .set({
        isActive: false,
        modifiedAt: new Date(),
      })
      .where(eq(videoGames.id, id.value));

    return Promise.resolve();
  }
}
