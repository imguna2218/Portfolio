// src/components/Header.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './custom.css'; // Import the custom CSS file
import logo from './logo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [show, setShow] = useState(window.innerWidth < 768 ? false : true);
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 diagonal-gradient flex justify-between items-center px-5"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.3, type: 'spring', stiffness: 80 }}
    >
      <div className="logo"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.2, type: 'spring', stiffness: 10 }}
      >
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="navs">
        <div onClick={() => setShow(!show)} className="mt-5 absolute top-0 right-3  md:hidden text-3xl"><GiHamburgerMenu /></div>

        {
          show &&
          <ul id='navbarelements' className="mt-[13rem] md:mt-0 flex md:flex-row flex-col list-none"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.2, type: 'spring', stiffness: 10 }}
          >

            <a href="#home">
              <li className="text-white py-2 px-3 text-lg cursor-pointer flex items-center relative group transition-all duration-300">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
                <span className="absolute bottom-0 left-0 h-[3px] bg-red-200 w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            </a>

            <a href="#about">
              <li className="text-white py-2 px-3 text-lg cursor-pointer flex items-center relative group transition-all duration-300">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
                <span className="absolute bottom-0 left-0 h-[3px] bg-red-200 w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            </a>

            <a href="#project">
              <li className="text-white py-2 px-3 text-lg cursor-pointer flex items-center relative group transition-all duration-300">
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                Projects
                <span className="absolute bottom-0 left-0 h-[3px] bg-red-200 w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            </a>

            <a href="#contact">
              <li className="text-white py-2 px-3 text-lg cursor-pointer flex items-center relative group transition-all duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact
                <span className="absolute bottom-0 left-0 h-[3px] bg-red-200 w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            </a>

          </ul>
        }
      </div>
    </div >
  );
};

export default Header;
