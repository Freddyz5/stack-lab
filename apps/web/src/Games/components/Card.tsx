'use client';
import React from 'react';
import { Card as HCard, CardHeader, CardBody, Image, Button } from '@heroui/react';
import { VideoGame } from '../../shared/types/VideoGames';

type CardProps = {
  game: VideoGame;
  onEdit?: (game: VideoGame) => void;
  onDelete?: (game: VideoGame) => void;
};

const Card: React.FC<CardProps> = ({ game, onEdit, onDelete }) => {
  return (
    <HCard className="relative w-64 p-4 flex flex-col gap-2">
      {/* Botón de acciones en la esquina superior derecha */}
      {(onEdit || onDelete) && (
        <div className="absolute top-2 right-2 flex gap-1">
          {onEdit && (
            <Button size="sm" color="primary" onPress={() => onEdit(game)}>
              Edit
            </Button>
          )}
          {onDelete && (
            <Button size="sm" color="danger" onPress={() => onDelete(game)}>
              Delete
            </Button>
          )}
        </div>
      )}

      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{game.title}</h4>
        <p className="text-tiny uppercase font-bold">Género: {game.genre}</p>
        <small className="text-default-500">Estado: {game.state}</small>
      </CardHeader>

      <CardBody className="overflow-visible py-2 flex flex-col gap-2">
        <p className="text-sm">Descripción: {game.description}</p>
        <p className="text-sm font-medium">Dificultad: {game.difficulty}</p>

        <Image
          alt={game.title}
          className="object-cover rounded-xl"
          src="https://picsum.photos/300/200"
          width={250}
        />
      </CardBody>
    </HCard>
  );
};

export default Card;
