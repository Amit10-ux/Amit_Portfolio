import React from 'react';
import { Code, Brain, FolderRoot as Football } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-700 leading-relaxed mb-10">
            <p className="mb-6">
              Hey! I am Amit, an individual with a passion for both the technical intricacies of software engineering 
              and the strategic dynamism of football. Having built a basic foundation in frontend development, 
              I possess hands-on experience in crafting user-friendly and visually engaging interfaces.
            </p>
            <p className="mb-6">
              My keen interest is in the rapidly evolving fields of Machine Learning and Artificial Intelligence, 
              which signals a forward-thinking mindset and a desire to explore cutting-edge technologies. 
              This intellectual curiosity, combined with the discipline and teamwork honed on the football field, 
              positions me as a well-rounded and determined aspiring software engineer ready to tackle complex 
              challenges and contribute meaningfully to the tech world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">
                Experienced in creating responsive, user-friendly interfaces with modern web technologies.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ML & AI Enthusiast</h3>
              <p className="text-gray-600">
                Passionate about machine learning and artificial intelligence, exploring these cutting-edge technologies.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Football size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Football Player</h3>
              <p className="text-gray-600">
                Apply teamwork, discipline, and strategic thinking from football to solve complex problems in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;