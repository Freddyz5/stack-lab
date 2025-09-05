export type VideoGame = {
  id: string;
  title: string;
  description: string;
  genre: string;
  difficulty: string;
  state: string;
};

export type NewVideoGame = Omit<VideoGame, "id" | "isActive">;

export type UpdateVideoGameInput = Omit<VideoGame, "isActive">;
