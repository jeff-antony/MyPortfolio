import React from 'react';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goal Oriented',
      description: 'Focused on delivering results that exceed expectations'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Photo with Light Effects */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Background Light Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl scale-110"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
              
              {/* Photo Container */}
              <div className="relative w-80 h-100 lg:w-96 lg:h-100">
                {/* Replace this placeholder with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl shadow-2xl border border-gray-600/50 flex items-center justify-center overflow-hidden">
                       <img
        src="/image/Image2.jpg"
        alt="Profile photo"
        className="w-full h-full object-cover rounded-3xl shadow-2xl"
      />
                  {/* <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <p className="text-sm opacity-80">Replace with your photo</p>
                  </div> */}
                </div>
                
                {/* Floating Accent Elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce opacity-70"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with expertise in the MEARN stack and modern web technologies. 
                My journey began with an internship at Luminar Technolab, where I developed a strong foundation in 
                full-stack development.
              </p>
              <p>
                Throughout my career, I've specialized in React and JavaScript development, implementing advanced 
                techniques like lazy loading for optimized performance. I enjoy collaborating with backend teams 
                and have experience integrating frontend components with .NET Core infrastructure.
              </p>
              <p>
                Currently working as a Full Stack Developer at InIT Solutions, I continue to build comprehensive 
                solutions and stay current with the latest industry trends and best practices.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                3+ Years Experience
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                MEARN Stack Expert
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;