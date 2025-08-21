import { Card, CardHeader } from '@heroui/react';
import { Code2 } from 'lucide-react';
import React from 'react';

const Tecnologies = () => {
  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="container p-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tecnologías del Stack</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Las herramientas que usamos para construir aplicaciones modernas y escalables
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "GraphQL", desc: "API flexible y eficiente", color: "#f72585" },
            { name: "Next.js", desc: "Framework React full-stack", color: "#7209b7" },
            { name: "PostgreSQL", desc: "Base de datos relacional", color: "#4cc9f0" },
            { name: "Prisma/Drizzle", desc: "ORM type-safe", color: "#4361ee" },
            { name: "TypeScript", desc: "JavaScript con tipos", color: "#3a0ca3" },
            { name: "Tailwind CSS", desc: "Utility-first CSS", color: "#f72585" },
            { name: "Docker", desc: "Containerización", color: "#7209b7" },
            { name: "Testing", desc: "Jest, Vitest, Playwright", color: "#4cc9f0" },
          ].map((tech, index) => (
            <Card
              key={index}
              className="text-center border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors p-5"
            >
              <CardHeader className="pb-3 flex flex-col items-center gap-3">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: tech.color }}
                >
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-lg" style={{ color: tech.color }}>
                  {tech.name}
                </h1>
              </CardHeader>
              <div>
                <div>{tech.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;