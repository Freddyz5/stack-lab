// 'use client';
// import React from 'react';
// import TitleGames from './components/TitleGames';

// const Games = () => {
//   return (
//     <main className="h-full">
//       <TitleGames />

//     </main>
//   );
// };

// export default Games;

// 'use client';
// import React, { useState } from 'react';
// import TitleGames from './components/TitleGames';

// const Games = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <main className="h-full">
//       <TitleGames />

//       {/* Botón de añadir */}
//       <button
//         onClick={() => setModalOpen(true)}
//         className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
//       >
//         Añadir
//       </button>

//       {/* Aquí más adelante irá tu grid de cartas */}
//     </main>
//   );
// };

// export default Games;


'use client';
import React, { useState } from 'react';
import TitleGames from './components/TitleGames';
import Card, { VideoGame } from './components/Card';
import ModalCard from './components/ModalCard';

const Games = () => {
  const [games, setGames] = useState<VideoGame[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // TODO: usas el hook que te trae todos los games
  // const { games, isLoading } = useVideoGames();
  // console.log("games", games)
  const gamesExample = [
    {
      genre: "asd",
      description: "asd",
      difficulty: "asd",
      state: "asd",
    },
    {
      genre: "asd",
      description: "asd",
      difficulty: "asd",
      state: "asd",
    },
    {
      genre: "asd",
      description: "asd",
      difficulty: "asd",
      state: "asd",
    }
  ]
  // TODO: modificar la card de los games para que muestre los datos correctamente
  // TODO: en el modal usar el modal de HeroUi
  // TODO: usar formik en el modal
  // TODO: Implementar un boton en cada card para eliminar o editar
  // TODO: Mostrar los datos del juego seleccionado en la card
  // TODO: Implementar servicio y hook de añadir juego
  // TODO: Implementar servicio y hook de editar juego
  // TODO: Implementar servicio y hook de eliminar juego

  const handleAddGame = (game: VideoGame) => {
    setGames((prev) => [...prev, game]);
    // Aquí puedes enviar los datos a tu API para guardar en la BDD
  };

  return (
    <main className="h-full">
      <TitleGames />

      {/* Botón de añadir */}
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Añadir
      </button>

      {/* Grid de cartas */}
      <section className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </section>

      {/* Modal para agregar un VideoGame */}
      <ModalCard
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddGame}
      />
    </main>
  );
};

export default Games;
