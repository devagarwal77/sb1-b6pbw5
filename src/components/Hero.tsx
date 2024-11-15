import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Elevate Your Fintech Marketing with Data-Driven Excellence
        </h1>
        <p className="text-xl mb-8 text-blue-100">
          Blend finance, technology, and creativity to deliver highly effective marketing solutions 
          tailored for the fintech industry.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
            hover:bg-blue-50 transition-colors flex items-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold 
            hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}