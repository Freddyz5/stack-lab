export type VideoGame = {
  id: string;
  title: string;
  description: string;
  genre: string;
  difficulty: string;
  state: string;
  isActive: boolean; 
};

export type NewVideoGame = Omit<VideoGame, "id" | "isActive">;

export type UpdateVideoGameInput = Omit<VideoGame, "isActive">;
