'use client';
import React, { useState } from 'react';
import TitleGames from './components/TitleGames';
import Card from './components/Card';
import { NewVideoGame, VideoGame } from '../shared/types/VideoGames';
import ModalCard from './components/ModalCard';
import { useVideoGames } from './hooks/useVideoGames';
import { useAddVideoGame } from './hooks/useAddVideoGame';
import { useEditVideoGame } from './hooks/useEditVideoGame';
import { useDeleteVideoGame } from './hooks/useDeleteVideoGame';

const Games = () => {
  const { videoGames, isLoading } = useVideoGames();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<VideoGame | null>(null);
  const { addVideoGame } = useAddVideoGame();
  const { editGame } = useEditVideoGame();
  const { deleteGame } = useDeleteVideoGame();

  const handleSaveGame = (game: VideoGame | NewVideoGame) => {
    if ('id' in game) {
      const { isActive, ...gameInput } = game; // omitimos isActive
      console.log('Editar juego:', gameInput);
      editGame(gameInput); // ahora cumple con UpdateVideoGameInput
    } else {
      console.log('Nuevo juego:', game);
      addVideoGame(game); // aquí espera un NewVideoGame
      // TODO: crear
    }
    setModalOpen(false);
    setSelectedGame(null);
  };

  const handleEdit = (game: VideoGame) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  const handleDelete = (game: VideoGame) => {
    console.log('Eliminar juego:', game);
    deleteGame(game.id);
    // TODO: llamar a hook o API para eliminar juego
  };

  if (isLoading) return <p>Cargando juegos...</p>;

  return (
    <main>
      <TitleGames />

      {/* Botón de añadir */}
      <button
        onClick={() => {
          setSelectedGame(null); // crear nuevo
          setModalOpen(true);
        }}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Añadir
      </button>

      {/* Grid de cartas */}
      <section className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {videoGames.map((game) => (
          <Card key={game.id} game={game} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </section>

      {/* Modal para agregar/editar un VideoGame */}
      <ModalCard
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveGame}
        initialValues={selectedGame || undefined}
      />
    </main>
  );
};

export default Games;
