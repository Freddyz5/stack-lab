'use client'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Tecnologies from './components/Tecnologies';
import Learning from './components/Learning';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Technologies Section */}
      <Tecnologies />

      {/* Learning Section */}
      <Learning />

      {/* Footer */}
      <Footer />
    </div>
  )
};

export default LandingPage;
