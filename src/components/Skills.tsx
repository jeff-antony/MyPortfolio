import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: '/image/physics.png', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '/image/js-file.png', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', icon: '/image/typescript.png', color: 'from-blue-500 to-blue-700' },
    { name: 'CSS', icon: '/image/css-3.png', color: 'from-blue-400 to-purple-600' },
    { name: 'Bootstrap', icon: '/image/media.png', color: 'from-purple-500 to-purple-700' },
    { name: 'MongoDB', icon: '/image/database.png', color: 'from-green-400 to-green-700' },
    { name: 'Angular', icon: '/image/programing.png', color: 'from-red-400 to-red-600' },
    { name: 'Node.js', icon: '/image/programing (1).png', color: 'from-green-400 to-green-600' },
    { name: 'HTML', icon: '/image/html.png', color: 'from-orange-400 to-orange-600' },
    { name: 'SCSS', icon: '/image/sass.png', color: 'from-pink-400 to-pink-600' },
    { name: 'Git', icon: '/image/icons8-git-48.png', color: 'from-orange-500 to-red-500' },
    { name: 'MySQL', icon: '/image/icons8-mysql-48.png', color: 'from-blue-400 to-indigo-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="skill-card bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 hover:scale-110 hover:rotate-2">
                {/* Floating Animation */}
                <div className="skill-icon text-4xl mb-4 animate-float flex justify-center items-center">
                  {skill.icon.endsWith('.png') || skill.icon.endsWith('.jpg') || skill.icon.endsWith('.svg') ? (
    <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
  ) : (
    <span>{skill.icon}</span>
  )}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>
                
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;