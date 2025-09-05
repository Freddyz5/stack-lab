'use client';
import React, { useState } from 'react';
import TitleGames from './components/TitleGames';
import Card from './components/Card';
import { VideoGame } from '../shared/types/VideoGames';
import ModalCard from './components/ModalCard';
import { useVideoGames } from './hooks/useVideoGames';
import { useDeleteVideoGame } from './hooks/useDeleteVideoGame';
import { Button } from '@heroui/react';

const Games = () => {
  const { videoGames, isLoading } = useVideoGames();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<VideoGame | null>(null);
  const { deleteGame } = useDeleteVideoGame();

  console.log("videoGames", videoGames)

  const handleEdit = (game: VideoGame) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  const handleDelete = (game: VideoGame) => {
    deleteGame(game.id);
  };

  if (isLoading) return <p>Cargando juegos...</p>;

  return (
    <main>
      <TitleGames />

      <div className="p-5">
        <Button
          color="primary"
          variant="bordered"
          className="mt-4"
          onClick={() => {
            setSelectedGame(null);
            setModalOpen(true);
          }}
        >
          Añadir
        </Button>

        <section className="mt-6 flex flex-wrap justify-center gap-4">
          {videoGames.map((game) => (
            <Card key={game.id} game={game} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </section>
      </div>

      <ModalCard
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialValues={selectedGame || undefined}
      />
    </main>
  );
};

export default Games;
