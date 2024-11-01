"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

const professional_page: React.FC = () => {
 
  return (
    <>
    <Header />
    <h1>
        Partie Professionnel
    </h1>
    <Footer />
    </>
  );
};

export default professional_page;