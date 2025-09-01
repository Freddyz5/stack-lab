'use client';
import React, { useState } from 'react';
import { VideoGame } from './Card';
import { v4 as uuidv4 } from 'uuid';

type ModalCardProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (game: VideoGame) => void;
};

const difficulties: VideoGame['difficulty'][] = ['facil', 'dificil', 'experto'];
const states: VideoGame['state'][] = ['jugado', 'jugando', 'por jugar'];

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [difficulty, setDifficulty] = useState<VideoGame['difficulty']>('facil');
  const [state, setState] = useState<VideoGame['state']>('jugando');

  if (!isOpen) return null;

  const handleSave = () => {
    const newGame: VideoGame = {
      id: uuidv4(),
      title,
      description,
      genre,
      difficulty,
      state,
    };
    onSave(newGame);

    // Limpiar campos
    setTitle('');
    setDescription('');
    setGenre('');
    setDifficulty('facil');
    setState('jugando');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 text-black flex flex-col gap-4">
        <h2 className="text-xl font-bold">Agregar VideoGame</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Género"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as VideoGame['difficulty'])}
          className="border p-2 rounded"
        >
          {difficulties.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={state}
          onChange={(e) => setState(e.target.value as VideoGame['state'])}
          className="border p-2 rounded"
        >
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
