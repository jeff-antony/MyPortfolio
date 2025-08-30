import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Skills />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 antonyjefin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;