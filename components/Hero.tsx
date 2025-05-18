import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Hi, I'm <span className="text-blue-400">Amit Pattanaik</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 animate-fadeIn animation-delay-200">
              Frontend Developer | Machine Learning Enthusiast | Football Player
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fadeIn animation-delay-400">
              <a
                href="#projects"
                className="py-3 px-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="py-3 px-8 bg-transparent border border-white hover:bg-white hover:text-blue-900 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fadeIn animation-delay-200">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Amit Pattanaik"
                className="rounded-full object-cover w-full h-full shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;