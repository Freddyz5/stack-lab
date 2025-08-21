import React from 'react';
import Section from './Section';
import { Code2, Github, Instagram, Linkedin } from 'lucide-react';
import { Button, Link } from '@heroui/react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#f72585" }}
            >
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Stack Lab</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ para el equipo de desarrollo. Experimenta, aprende y crece.
          </p>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              as={Link}
              href="https://github.com/Freddyz5/stack-lab"
              target='_blank'
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent" isDisabled>
              Documentación
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;