import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: '05/2025 - 09/2025',
      title: 'Full Stack Developer (Trainee)',
      company: 'InIT Solutions Pvt Ltd',
      location: 'Kochi, Kerala',
      description: 'Currently working as a Full Stack Developer, building comprehensive web solutions and implementing modern development practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      current: false
    },
    {
      period: '01/2024 - present',
      title: 'Freelancer - Full Stack Developer',
      company: 'Independent',
      location: 'Remote',
      description: 'Worked as a freelance Full Stack Developer, delivering custom web applications and solutions for various clients across different industries.',
      technologies: ['React', 'Angular', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
      current: false
    },
    {
      period: '12/2022 - 12/2023',
      title: 'Junior Software Developer',
      company: 'Antas Solutions Pvt Ltd',
      location: 'Kochi, Kerala',
      description: 'Specialized in React and JavaScript development, utilizing advanced techniques like lazy loading for optimized frontend performance. Implemented various libraries to enhance user interface functionality and collaborated closely with backend developers, supporting .NET Core infrastructure.',
      technologies: ['React', 'JavaScript', 'CSS', '.NET Core'],
      current: false
    },
    {
      period: '06/2022 - 11/2022',
      title: 'Intern',
      company: 'Luminar Technolab',
      location: 'Kochi, Kerala',
      description: 'Specialized in MEARN (MongoDB, Express.js, Angular, React.js, Node.js) full stack development during the internship. Developed and implemented end-to-end solutions, proficiently working across the entire tech stack.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'React.js', 'Node.js'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey as a Full Stack Developer
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  exp.current 
                    ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50' 
                    : 'bg-gray-600 border-gray-600'
                }`}></div>
                
                {/* Experience Card */}
                <div className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                        {exp.current && (
                          <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center text-blue-400 font-semibold text-lg mb-2">
                        <Briefcase className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;