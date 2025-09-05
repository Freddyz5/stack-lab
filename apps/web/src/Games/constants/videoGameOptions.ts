import { VideoGame } from "../../shared/types/VideoGames";

export const difficulties: VideoGame['difficulty'][] = ['facil', 'medio', 'dificil', 'experto'];
export const states: VideoGame['state'][] = [
  'por jugar',
  'no jugado',
  'quiero jugar',
  'jugando',
  'jugado',
];