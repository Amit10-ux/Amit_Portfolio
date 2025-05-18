import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Amit<span className="text-blue-500">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Frontend Developer with a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Amit Pattanaik. All rights reserved.</p>
            </div>
            
            <div className="mt-4">
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;