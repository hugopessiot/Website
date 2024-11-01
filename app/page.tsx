import React from 'react';
import Header from './components/header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur le site des motos</h1>
        <p className="text-lg mb-4">
          Découvrez notre collection de motos. Utilisez le menu pour naviguer vers la liste des motos ou pour en ajouter une nouvelle.
        </p>
      </div>
    </>
  );
};

export default HomePage;