"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  // const [isConfigOpen, setIsConfigOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold hover:bg-gray-700 transition-colors duration-300 rounded-md p-2">
          Introduction
        </Link>
      <Link href="/academic" className="text-xl font-bold hover:bg-gray-700 transition-colors duration-300 rounded-md p-2">
          Academic 
        </Link>
      </div>
    </nav>
  );
};

export default Header;