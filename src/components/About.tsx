import React from 'react';
import { Target, Users, Award, Rocket } from 'lucide-react';

export function About() {
  const stats = [
    { label: "Clients Served", value: "500+" },
    { label: "ROI Generated", value: "300%" },
    { label: "Team Members", value: "50+" },
    { label: "Global Presence", value: "15+" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge marketing solutions"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client Success",
      description: "Your growth and success are at the heart of everything we do"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in all our deliverables"
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      title: "Growth Mindset",
      description: "Continuous learning and improvement drive our approach"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-bold mb-6">Empowering Financial Brands with Advanced Marketing</h1>
          <p className="text-xl text-gray-600 mb-12">
            We're on a mission to revolutionize financial marketing through innovation, 
            data-driven strategies, and creative excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, FundXAds emerged from a vision to bridge the gap between 
                traditional financial marketing and modern digital solutions. Our journey 
                began with a simple mission: to help financial institutions connect with 
                their audiences more effectively.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of financial marketing innovation, 
                serving clients across the globe with data-driven strategies and creative 
                solutions that drive real results.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}