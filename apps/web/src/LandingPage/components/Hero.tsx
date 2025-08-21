import { Badge, Button, Link } from '@heroui/react';
import React from 'react';
import '../styles/styles.css';
import Section from './Section';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7209b7] via-[#3a0ca3] to-[#4361ee] opacity-10" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" content="🚀 Experimenta sin límites"><></></Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4361ee] bg-clip-text text-transparent">
              Stack Lab
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Un espacio para experimentar y reforzar lo esencial de nuestro stack:
            <span className="text-primary font-semibold"> GraphQL</span>,
            <span className="text-secondary font-semibold"> arquitectura hexagonal</span>,
            <span className="text-accent font-semibold"> frontend moderno</span> y
            <span style={{ color: "#4cc9f0" }} className="font-semibold">
              {" "}
              PostgreSQL
            </span>
            .
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            La idea es simple: <strong>aprender haciendo</strong>, equivocarse sin miedo y ganar confianza paso a
            paso.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              as={Link}
              href="login"
            >
              Comenzar a Experimentar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              as={Link}
              href="https://github.com/Freddyz5/stack-lab"
            >
              <Github className="mr-2 h-4 w-4" />
              Ver Repositorio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
