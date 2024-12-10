import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <div className="bg-gray-900 text-red-500 py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="footertxt text-lg">Designed and developed by Guna sekhar parisa</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p className="footertxt text-lg">Copyright © 2024 GP</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/guna-sekhar-parisa-510447317/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/imguna2218" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.leetcode.com/u/Guna_sekhar_parisa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <SiLeetcode className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/imguna2218" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaInstagram className="text-2xl" />
          </a>

          <a href="mailto:gunasekharparisa2218@gmail.com" className="text-white hover:text-blue-500">
            <FaEnvelope className="text-2xl" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Footer;
