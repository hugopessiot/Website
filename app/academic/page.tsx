"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import React, { useState } from 'react';
import Header from '../components/header'

const academic_page: React.FC = () => {
  // const [isConfigOpen, setIsConfigOpen] = useState(false);

  return (
    <>
    <Header />
    <h1>
        Partie Academic
    </h1></>
  );
};

export default academic_page;