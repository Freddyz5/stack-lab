'use client';
import React from 'react';
import TitleDashboard from './components/TitleDashboard';
import CardDashboard from './components/CardDashboard';

const Dashboard = () => {
  return (
    <main className="h-full">
      <TitleDashboard />
      <div className="mt-6 ml-6 p-4">
        <CardDashboard />
      </div>
    </main>
  );
};

export default Dashboard;
