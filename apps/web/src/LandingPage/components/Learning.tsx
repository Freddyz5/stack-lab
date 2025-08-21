import { Button, Link } from '@heroui/react';
import { Github } from 'lucide-react';
import React from 'react';

const Learning = () => {
  return (
    <section id="learning" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Aprende Haciendo</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Stack Lab no es solo código, es una filosofía de aprendizaje continuo donde cada error es una oportunidad
            de crecimiento.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: "#f72585" }}
              >
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Experimenta</h3>
              <p className="text-muted-foreground">Prueba nuevas tecnologías y patrones sin miedo a romper nada</p>
            </div>
            <div className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: "#7209b7" }}
              >
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Equivócate</h3>
              <p className="text-muted-foreground">Los errores son parte del proceso de aprendizaje, no los evites</p>
            </div>
            <div className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: "#4361ee" }}
              >
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Crece</h3>
              <p className="text-muted-foreground">Gana confianza paso a paso y comparte tu conocimiento</p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#f72585] to-[#7209b7] hover:from-[#f72585]/90 hover:to-[#7209b7]/90 text-white"
            as={Link}
            href="https://github.com/Freddyz5/stack-lab"
          >
            <Github className="mr-2 h-5 w-5" />
            Explorar el Repositorio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Learning;