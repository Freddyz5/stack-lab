'use client';
import React, { JSX } from 'react';
import {Card as HCard, CardHeader, CardBody, Image, Button, Dropdown, 
  DropdownItem, DropdownMenu, DropdownTrigger,} from '@heroui/react';
import { VideoGame } from '../../shared/types/VideoGames';
import { Menu } from 'lucide-react'

type CardProps = {
  game: VideoGame;
  onEdit?: (game: VideoGame) => void;
  onDelete?: (game: VideoGame) => void;
};

const Card: React.FC<CardProps> = ({ game, onEdit, onDelete }) => {
  return (
    <HCard className="relative w-64 p-4 flex flex-col gap-2">
      <div className="absolute top-2 right-2">
        <Dropdown>
          <DropdownTrigger>
            <Button 
              size="sm"
              variant="ghost"
              isIconOnly
            >
              <Menu />
            </Button>
          </DropdownTrigger>

          <DropdownMenu className="bg-gray-100 text-black">
            <DropdownItem key="edit" onPress={() => onEdit && onEdit(game)}>
              Editar
            </DropdownItem>
            <DropdownItem
              className="text-danger"
              key="delete"
              onPress={() => onDelete && onDelete(game)}
            >
              Eliminar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

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
