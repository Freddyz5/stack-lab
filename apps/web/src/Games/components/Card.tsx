'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card as HCard } from '@heroui/react'; // Ejemplo
type Difficulty = 'facil' | 'dificil' | 'experto';
type State = 'jugado' | 'jugando' | 'por jugar';

export type VideoGame = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly genre: string;
  readonly difficulty: Difficulty;
  readonly state: State;
};

type CardProps = {
  game: VideoGame;
};

const Card: React.FC<CardProps> = ({ game }) => {
  return (
    <HCard className="w-60 p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold">{game.title}</h3>
      <p>
        <strong>Género:</strong> {game.genre}
      </p>
      <p>
        <strong>Descripción:</strong> {game.description}
      </p>
      <p>
        <strong>Dificultad:</strong> {game.difficulty}
      </p>
      <p>
        <strong>Estado:</strong> {game.state}
      </p>
    </HCard>
  );
};

export default Card;
