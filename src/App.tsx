import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Insights } from './components/Insights';
import { About } from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <header id="home" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-16">
        <Navbar />
        <Hero />
      </header>
      <main className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <Services />
        <Vision />
        <section id="insights">
          <Insights />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="animate-pulse-soft">© 2024 FundXAds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;