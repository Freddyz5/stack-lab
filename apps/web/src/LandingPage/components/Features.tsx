import React from 'react';
import Section from './Section';
import { BookOpen, Code2, Database, Layers, LockKeyhole, Settings, Users, Zap } from 'lucide-react';
import { Card, CardHeader } from '@heroui/react';

const Features = () => {

  return (
    <section id="features" className="py-20">
      <div className="container px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué Stack Lab?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un entorno seguro para experimentar con tecnologías modernas y patrones de arquitectura
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#f72585" }}
              >
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-primary pl-3">Experimentación Libre</h1>
            </CardHeader>
            <div>
              <div>
                Prueba nuevas ideas, rompe cosas y aprende de los errores sin presión de producción.
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#7209b7" }}
              >
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-secondary pl-3">Arquitectura Hexagonal</h1>
            </CardHeader>
            <div>
              <div>
                Explora patrones de diseño que separan la lógica de negocio de los detalles técnicos.
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#4361ee" }}
              >
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-accent pl-3">GraphQL Moderno</h1>
            </CardHeader>
            <div>
              <div>
                Domina las consultas eficientes, subscripciones en tiempo real y el ecosistema GraphQL.
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#4cc9f0" }}
              >
                <Database className="h-6 w-6 text-white" />
              </div>
              <h1 style={{ color: "#4cc9f0" }} className="pl-3">PostgreSQL + ORM</h1>
            </CardHeader>
            <div>
              <div>
                Experimenta con Prisma y Drizzle para manejar datos de forma eficiente y type-safe.
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#3a0ca3" }}
              >
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 style={{ color: "#3a0ca3" }} className="pl-3">Aprendizaje Práctico</h1>
            </CardHeader>
            <div>
              <div>
                Cada experimento incluye documentación, ejemplos y casos de uso reales.
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur p-5">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#f72585] to-[#7209b7]">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h1 className="bg-gradient pl-3-to-r from-[#f72585] to-[#7209b7] bg-clip-text pl-3">
                Colaboración en Equipo
              </h1>
            </CardHeader>
            <div>
              <div>
                Comparte conocimientos, revisa código y crece junto al equipo de desarrollo.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;