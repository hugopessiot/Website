"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'


const projects_page: React.FC = () => {
 
  return (
    <>
    <Header />

          <div className="max-w-5xl mx-auto mt-24 mb-24">
              <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                  <div className="relative w-32 h-32 flex-shrink-0">
                      <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/306947818_465000695661328_6778403210850240937_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=rmC8hXwuH-4Q7kNvgHGKPVt&_nc_zt=24&_nc_ht=scontent-cdg4-2.xx&_nc_gid=Az2Yl_P9bOPhsy9SO2Tp8mD&oh=00_AYBuS1Ei9HpX0DqEJiCd27rD2Jrsd45wTmpigf8HkQp57w&oe=67390B6D" />
                  </div>

                  <div className="flex flex-col gap-2 py-2">

                      <p className="text-xl font-bold text-black">Formula Student : Ground connection</p>

                      <p className="text-gray-500">
                          During my second year at Sigma-Clermont, I had the opportunity to design the vehicle ground connection. In a team of 8 student, we followed a ground connection course
                          given by Renault's engineer. My main tasks was to insert choosen suspension in the vehicle CAD modeling. I also recreated in the CAD both tippers of the chassis.
                          Finally, I was able to give suspension travel and suspension stiffness for following students on the project.
                      </p>

                      <span className="flex items-center justify-start text-gray-500">
                          <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                          </svg>
                          <a href="https://www.instagram.com/ecurie_sigmaracing/?igshid=YmMyMTA2M2Y%3D" target="_blank">SIGMA RACING</a>
                      </span>

                  </div>

              </div>

          </div>

          <div className="max-w-5xl mx-auto mt-24 mb-24">
              <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                  <div className="relative w-64 h-32 flex-shrink-0">
                      <img className="absolute left-0 top-0 w-64 h-32 object-contain object-center transition duration-50" loading="lazy" src="/chassis.png" />
                  </div>

                  <div className="flex flex-col gap-2 py-2">

                      <p className="text-xl font-bold text-black">Formula Student : Vehicle's crash-box</p>

                      <p className="text-gray-500">
                          My final year project at Sigma-Clermont was designing the crash box system of the car in a group of two. 
                          At first we made a dynamic finite-element calculation on an aluminum honeycomb material. 
                          Rapidly limitated by computers calculation capacities, we decided to make a term of finite-element calculations.
                          At the end, we designed all our crash-box system in the CAD chassis following Formula student reglementation.
                          We also made all quotes and estimations of the crash-box asssembly.
                      </p>

                      <span className="flex items-center justify-start text-gray-500">
                          <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                          </svg>
                          <a href="/PESSIOT_HERNANDEZ_RapportProjet3A.pdf" target="_blank">FINAL YEAR PROJECT REPORT</a>
                      </span>

                  </div>

              </div>

          </div>
          <Footer />
    </>
  );
};

export default projects_page;