import React from 'react';
import { Button, Link } from '@heroui/react';
import { Code2, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: "#f72585" }}>
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">Stack Lab</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Características
          </a>
          <a href="#technologies" className="text-sm font-medium hover:text-primary transition-colors">
            Tecnologías
          </a>
          <a href="#learning" className="text-sm font-medium hover:text-primary transition-colors">
            Aprendizaje
          </a>
          <Button
            variant="bordered"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            as={Link}
            href="https://github.com/Freddyz5/stack-lab"
            target='_blank'
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;