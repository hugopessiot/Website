"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import React from 'react';

const Footer: React.FC = () => {
    
    return (

        <footer
          className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
          <div
            className="flex items-center justify-center p-6 lg:justify">
            <div className="me-6 hidden lg:block">
              <span>Get connected with me : </span> 
            </div>
            <div className="me-6 hidden lg:block">
                <span> hpessiotpro@gmail.com </span>
            </div>
            <div className="me-6 hidden lg:block">
                <span> 06 42 78 54 61 </span>
            </div>
                {/* <!-- Social network icons container --> */}
            <div> 
                <a
                    href="https://www.linkedin.com/in/pessiot-hugo-872582221/"
                    type="button"
                    className="text-white p-3"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </span>
                </a>
            </div>
          </div>
        </footer>  

    );
};

export default Footer;