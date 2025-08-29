import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      period: '2019 - 2022',
      institution: 'KMM College of Arts and Science',
      location: 'Ernakulam',
      university: 'MG University',
      type: 'degree'
    },
    {
      degree: 'Computer Science',
      period: '2017 - 2019',
      institution: 'Bhagavathi Vilasam Higher Secondary School',
      location: 'Ernakulam',
      university: '',
      type: 'higher_secondary'
    }
  ];

  const certifications = [
    {
      name: 'National Council For Technology and Training',
      type: 'Professional Certification',
      icon: '🏆'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-blue-400 font-semibold text-lg mb-2">
                        {edu.institution}
                      </div>
                      {edu.university && (
                        <div className="text-gray-400 mb-4">
                          {edu.university}
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-8">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        edu.type === 'degree' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        <GraduationCap className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-yellow-400" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center text-2xl mr-6">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400">
                        {cert.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;