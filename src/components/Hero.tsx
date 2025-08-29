import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../style/TextSection.css';


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
               {/* <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-2">
             <span className="typing-effect">I am Antony Jefin</span>
           </h2> */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="">I am Antony Jefin</span>
                <span className="typing-effect block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Crafting digital experiences with modern technologies and creative problem-solving
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Placeholder for user photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    {/* <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center"> */}
                    <img 
        src="public/image/Image1.jpg" 
        alt="Profile photo" 
        className="w-full h-full object-cover rounded-3xl shadow-2xl"
      />
                      {/* <span className="text-4xl">👨‍💻</span> */}
                    {/* </div> */}
                    {/* <p className="text-sm opacity-80">Replace with your photo</p> */}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-pink-400 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;