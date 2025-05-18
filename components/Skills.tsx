import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 80, category: 'frontend' },
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 65, category: 'frontend' },
    { name: 'Python', level: 60, category: 'backend' },
    { name: 'Node.js', level: 50, category: 'backend' },
    { name: 'Git', level: 70, category: 'tools' },
    { name: 'Machine Learning', level: 40, category: 'other' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-600">
            Here are some of the technologies and skills I've been working with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: 'progress 1.5s ease-out forwards',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;