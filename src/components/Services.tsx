import React from 'react';
import { Target, Lightbulb, TrendingUp, Search, LineChart, BarChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Digital Advertising",
      description: "Targeted campaigns across social media, display ads, and search marketing"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Content Marketing",
      description: "Engaging, informative content that builds trust and drives conversions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Performance Marketing",
      description: "Data-backed strategies designed to maximize ROI with clear insights"
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "SEO & SEM",
      description: "Increase visibility with cutting-edge SEO and search marketing techniques"
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: "Analytics & Optimization",
      description: "Continuous monitoring and optimization for peak campaign performance"
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: "IRCTC Inventory Access",
      description: "Exclusive access to India's largest digital ecosystem for premium audience targeting"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Our Core Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}